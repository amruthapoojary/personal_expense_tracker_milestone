// In-memory expense storage
let expenses = [];

// Add a new expense
exports.addExpense = (req, res) => {
  const { category, amount, date } = req.body;

  // Validate input
  if (!category || !amount || !date) {
    return res.status(400).json({ message: 'Category, amount, and date are required.' });
  }

  const expense = {
    id: expenses.length + 1,
    category,
    amount,
    date,
  };
  expenses.push(expense);
  res.status(201).json({ message: 'Expense added successfully.', expense });
};

// Retrieve expenses
exports.getExpenses = (req, res) => {
  const { category, startDate, endDate } = req.query;

  let filteredExpenses = expenses;

  if (category) {
    filteredExpenses = filteredExpenses.filter(exp => exp.category === category);
  }

  if (startDate) {
    filteredExpenses = filteredExpenses.filter(exp => new Date(exp.date) >= new Date(startDate));
  }

  if (endDate) {
    filteredExpenses = filteredExpenses.filter(exp => new Date(exp.date) <= new Date(endDate));
  }

  res.status(200).json(filteredExpenses);
};

// Analyze expenses
exports.analyzeExpenses = (req, res) => {
  if (expenses.length === 0) {
    return res.status(200).json({ message: 'No expenses to analyze.' });
  }

  const totalsByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const highestCategory = Object.keys(totalsByCategory).reduce((a, b) =>
    totalsByCategory[a] > totalsByCategory[b] ? a : b
  );

  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  res.status(200).json({
    totalSpent,
    highestCategory,
    totalsByCategory,
  });
};

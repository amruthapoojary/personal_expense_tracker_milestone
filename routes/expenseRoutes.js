const express = require('express');
const { addExpense, getExpenses, analyzeExpenses } = require('../controllers/expenseController');

const router = express.Router();

// Routes
router.post('/', addExpense); // Add new expense
router.get('/', getExpenses); // Retrieve expenses
router.get('/analyze', analyzeExpenses); // Analyze expenses

module.exports = router;


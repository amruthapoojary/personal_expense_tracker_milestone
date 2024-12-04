Personal expense tracker API: 
Method:POST
http://localhost:7000/api/expenses
Body(json):
{
  "category": "Groceries",
  "amount": 250,
  "date": "2024-12-04"
}
Output:
{
  "message": "Expense added successfully.",
  "expense": {
    "id": 1,
    "category": "Groceries",
    "amount": 250,
    "date": "2024-12-04"
  }
}
Method:GET
http://localhost:7000/api/expenses
Output:
[
   {
    "id": 1,
    "category": "Groceries",
    "amount": 250,
    "date": "2024-12-04"
  }
]
Method:GET
http://localhost:7000/api/expenses/analyze
{
  "totalSpent": 250,
  "highestCategory": "Groceries",
  "totalsByCategory": {
    "Groceries": 250
  }
}

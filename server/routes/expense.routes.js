const ExpenseController = require('../controllers/expense.controller');

module.exports = app => {
    app.get('/api', ExpenseController.findAllExpenses);
    app.get('/api/expenses/:id', ExpenseController.findOneExpense);
    app.post('/api', ExpenseController.createExpense);
    // app.put('/api/expense/:id', ExpenseController.updateExpense);
    app.patch('/api/expenses/:id', ExpenseController.updateExpense);
    app.delete('/api/expenses/:id', ExpenseController.deleteExpense);
};
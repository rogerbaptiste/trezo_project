const Expense = require("../models/expense.model");

// FIND ALL EXPENSES
module.exports.findAllExpenses = (req, res) => {
    Expense.find()
        .then(allExpenses => res.json({ expenses: allExpenses }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// FIND AN EXPENSE
module.exports.findOneExpense = (req, res) => {
    Expense.findById(req.params.id)
        .then(oneExpense => res.json({ expense: oneExpense}))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// CREATE EXPENSE
module.exports.createExpense = (req, res) => {
    Expense.create(req.body)
        .then(newExpense => res.json({ expense: newExpense }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// UPDATE EXPENSE LIST
module.exports.updateExpense = (req, res) => {
    Expense.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedExpense => res.json({ expense: updatedExpense }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// DELETE 
module.exports.deleteExpense = (req, res) => {
    Expense.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}
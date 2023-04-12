const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Expense is required"],
        minlength: [3, "Expense must be at least 3 characters long"]
    },
    expenseNumber: {
        type: Number,
        required: [true, "An amount is required"],
        minlength: [1, "Expense must be a number greater than 0"]
    },
    // activeInactive: {
    //     type: String,
    //     enum: ["True", "False"],
    //     default: "True"
    // },

}, { timestamps: true });



module.exports = mongoose.model("Expense", ExpenseSchema);
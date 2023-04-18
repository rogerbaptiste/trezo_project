
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "Expense is required"],
        minlength: [1, "Expense must be at least 1 characters long"]
    },
    type: {
        type: String, default: "Investment"
    },
    amount: {
        type: Number
    }

},
    { timestamps: true });



module.exports = mongoose.model("Expense", ExpenseSchema);
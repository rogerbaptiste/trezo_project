
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "Expense is required"],
        minlength: [3, "Expense must be at least 3 characters long"]
    },
    type: {
        type: String, default: "Investment"
    },
    amount: {
        type: Number
    }

    // activeInactive: {
    //     type: String,
    //     enum: ["True", "False"],
    //     default: "True"
    // },

},
    { timestamps: true });



module.exports = mongoose.model("Expense", ExpenseSchema);
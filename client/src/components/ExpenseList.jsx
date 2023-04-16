// import React from "react";
// import 'boxicons'

// const obj = [
//     {
//         name: "Housing",
//         color: '#f9c74f',

//     },
//     {
//         name: "Utilities",
//         color: '#f9c74f',

//     },
//     {
//         name: "Groceries",
//         color: '#f9c74f',

//     },
//     {
//         name: "Car Payment",
//         color: '#f9c74f',

//     },
//     {
//         name: "Savings",
//         color: '#f9c74f',

//     },
//     {
//         name: "Insurance",
//         color: '#f9c74f',

//     },
//     {
//         name: "Investment",
//         color: '#f9c74f',

//     },
//     {
//         name: "Credit Card",
//         color: '#f9c74f',

//     },
//     {
//         tynamepe: "Other",
//         color: '#f9c74f',

//     },

// ]

// const Transaction = ({ category }) => {

//     if (!category) return null;
//     return (
//         <div style={{borderRight: `8px solid ${category.color ?? "#e5e5e5"}`}}>
//             <button className="px-3"><box-icon color ={category.color ?? "#e5e5e5"} name="trash"/></button>
//             <h1>{category.name??''}</h1>
//         </div>
//     )
// }

// const ExpenseList = () => {
//     return (
//         <div className='flex flex-col py-6 gap-3'>
//             <h1>List of Expenses</h1>
//             {obj.map((expense, amount) => <Transaction key ={amount} category={expense} />)}
           
//         </div>
//     )
// }

// export default ExpenseList
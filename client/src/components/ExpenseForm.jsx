// import React, { useState } from 'react'
// import axios from 'axios'
// import { useParams,useNavigate } from 'react-router-dom'
// import List from './ExpenseList'

// const ExpenseForm = () => {
    
//     const [expense, setExpense] = useState({
//         name: "",
//         type: "",
//         amount: ""
//     })
//     const [errors, setErrors] = useState({})

//     const navigate = useNavigate()

//     const onChangeHandler = (e) => {
//         setExpense({
//             ...expense,
//             [e.target.name]: e.target.value
//         })
//     }

//     const formValidator = () => {
//         let isValid = true
//         if (expense.name.length < 3) {
//             return false
//         }
//         if (expense.type.length <=1) {
//             return false
//         }
//         return isValid
//     }
//         const handleSubmit = (e) => {
//             e.preventDefault()
//             if (formValidator()) {
//                 axios.post('http://localhost:8000', expense)
//                 .then(res => console.log(res))
//                 .catch(err => console.log(err))
//             }
//             else {
//                 setErrors({
//                     name: "Store must be at least 2 characters",
//                     type: "Store Number must be greater than 1",
//                     amount: "Amount must be listed"
//                 })
//             }
//             navigate(`/`)
            
//         }
        
//     return (
//         <div className=''>
//             <h1 className=''>Transaction</h1>
//             <form action="" onSubmit={handleSubmit}>
//                 <div className='grid gap-4'>
//                     <input type="text" {...expense('name')} placeholder='Gas Bill, House Rent'onChange={onChangeHandler} value = {expense.name} />
//                     <select className="form-input" {...expense('type')} id="">
//                         <option value="Housing">Housing</option>
//                         <option value="Utilities">Utilities</option>
//                         <option value="Groceries">Groceries</option>
//                         <option value="Car Payment">Car Payment</option>
//                         <option value="Savings">Savings</option>
//                         <option value="Insurance">Insurance</option>
//                         <option value="Investment">Investment</option>
//                         <option value="Credit Card">Credit Card</option>
//                         <option value="Other">Other</option>
//                     </select>
//                     <input type="text" {...expense('amount')} placeholder='Amount' onChange={onChangeHandler}  />
//                     <button className='submit-btn'>Add Expense</button>
//                 </div>

//             </form>
//             <List/>
//         </div>
//     )
// }

// export default ExpenseForm
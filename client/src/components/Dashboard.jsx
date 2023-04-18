import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import ExpenseForm from './ExpenseForm';


const Dashboard = () => {
    const [expenses, setExpenses] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000')
            .then(res => setExpenses(res.data.expenses),
            console.log(expenses))
            .catch(err => console.log(err))
    }, [])

    const navigateToExpenseForm = () => {
        navigate("/api/expenses/create")
    }

    const deleteExpense = (id) => {
        axios.delete(`http://localhost:8000/api/expenses/${id}`)
            .then(res => {
                const filteredExpenses = expenses.filter(expense => expense._id !== id)
                setExpenses(filteredExpenses)
            })
            .catch(err => console.log(err))
    }


    return (

        <div>

            <div className="col-md-6 mx-auto mt-4">
                <ExpenseForm/>
                <thead>
              
                </thead>
                <tbody>
                    {expenses.map((expense) => {
                        return (
                            <tr key={expense._id}>
                                <td><Link to={`api/expenses/${expense._id}`}>{expense.name}</Link></td>
                                <td>{expense.type}</td>
                                
                                <td>
                                    <button className="btn btn-danger" onClick={(e) => deleteExpense(expense._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </div>
            {/* <button className="btn btn-info offset-5 mt-3" onClick={navigateToExpenseForm}>Can't find your store?</button> */}
        
        </div>
    )
}

export default Dashboard
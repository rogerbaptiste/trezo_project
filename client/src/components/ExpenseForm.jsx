import React, { useState, useEffect } from 'react'
import axios, { all } from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import List from './ExpenseList'
import SelectedExpense from './SelectedExpense'
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js"

Chart.register(ArcElement);
const ExpenseForm = () => {

    const [oneExpense, setOneExpense] = useState({})
    const [graphData, setGraphData] = useState([])
    useEffect((id) => {
        axios.get(`http://localhost:8000/api/expenses/${id}`)
            .then(res => setOneExpense(res.data.expense))
            .catch(err => console.log(err))
    }, [])

    const [expense, setExpense] = useState({
        name: "",
        type: "Investment",
        amount: ""
    })
    const [errors, setErrors] = useState({})

    const [allExpenses, setAllExpenses] = useState([])

    const [trigger, setTrigger] = useState(false)

    // const { id } = useParams = ();

    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        })
    }

    const onSelectHandler = (e) => {
        console.log(e)
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        })
    }

    const formValidator = () => {
        let isValid = true
        if (expense.name.length < 1) {
            return false
        }
        if (expense.type.length <= 1) {
            return false
        }
        return isValid
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('expense:', expense)
        console.log(formValidator())
        if (formValidator()) {
            axios.post('http://localhost:8000/api', {
                name: expense.name
                ,
                type: expense.type
                ,
                amount: expense.amount
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
        else {
            setErrors({
                name: "Store must be at least 2 characters",
                type: "Store Number must be greater than 1",
                amount: "Amount must be listed"
            })
        }

        setExpense({

            name: "",
            type: "Investment",
            amount: ""
        }
        )
        setTrigger(true)
        navigate(`/`)
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then((res) => {
                setAllExpenses(res.data.expenses)
                console.log('returning api', allExpenses)
            })
            .catch(err => console.log(err))
    }, [trigger])

    useEffect(() => {
        const graphArray = []
            allExpenses.map((anExpense, idx) => {graphArray.push(anExpense.amount)})
        setGraphData([...graphArray])
    }, [allExpenses])

    // useEffect(() => {
    //     console.log('are you working',graphData)
    // }, [graphData]
    // )

    const deleteExpense = (id) => {
        axios.delete(`http://localhost:8000/api/expenses/${id}`)
            .then(res => {
                const filteredExpenses = allExpenses.filter(expense => expense._id !== id)
                setAllExpenses(filteredExpenses)
            })
            .catch(err => console.log(err))

    }

    const navigateToEditExpense = (id) => {
        navigate(`/expenses/${id}/edit`)
    }

    // const editExpense = (id) => {
    //     id.preventDefault();
    //     axios.patch(`http://localhost:8000/api/expenses/${id}`, expense)
    //         .then(res => navigate("/"))
    //         .catch(err => console.log(err))
    // }

    const config = {

        data: {
            datasets: [{
                
                data: graphData,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(32,356,27)'
                ],
                hoverOffset: 4,
                borderRadius: 10,
                spacing: 1
            }]
        },
        chartProperties: {
            cutout: 115
        }
    }


    return (
        
        <div className='grid md:grid-cols-2 gap-1 format'>
           <div className='d-flex justify-content-start mb-5 chart'>

        <Doughnut {...config} />
           </div>

            <div className=''>
                <div >
                    <div className='d-flex justify-content-end mb-5'>
                        <h2 className='subheader'>Calculate Monthly Expenses</h2>
                    </div>
                    {/* {errors.name ? <p className="text-danger">{errors.name}</p> : ""} */}
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            {expense.name && expense.name.length < 3 ? <p className="text-danger" > Name must be at least 3 characters</p> : ""}
                            {/* <label htmlFor="name" className=""> Name</label> */}
                            <input type="text" placeholder='Mortgage' className="form-control mb-3" name="name" id="name" onChange={onChangeHandler} value={expense.name} />
                            {/* <div className="mb-3"> */}
                            {expense.type && expense.type.length < 1 ? <p className="text-danger"> Store number must be greater than 0</p> : ""}
                            {/* <label htmlFor="amount">Amount</label> */}
                            <input type="text" placeholder='$2500' className="form-control" name="amount" id="amount" onChange={onChangeHandler} />
                            {/* 
                    </div> */}
                            {/* <label htmlFor="type" className=""> Type of Expense</label> */}
                            <select className="form-select-input dropdown_select mb-3" id="type" value={expense.type} name='type' onChange={onSelectHandler}>
                                <option value="Housing">Housing</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Groceries">Groceries</option>
                                <option value="Car Payment">Car Payment</option>
                                <option value="Savings">Savings</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Investment">Investmenttt</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Other">Other</option>
                            </select>
                            <button className="btn btn-primary submitbtn mb-5">Add Expense</button>

                        </div>

                    </form>
                </div>
                <h2 className='d-flex justify-content-start mb-5 subheader'>Monthly Transaction History</h2>
                {allExpenses.map((item) => (
                    <div className='d-flex justify-content-center mb-5 entries'>

                        <tr key={item._id}>
                            <td className=''>{item.type}</td>
                            {/* <td><Link to={`api/expenses/${item._id}`}>{item.name}</Link></td> */}
                            {/* <td><Link to={`api/stores/${store._id}`}>{store.name}</Link></td> */}
                            <td >{item.name}</td>

                            <td><span>$</span>{item.amount}</td>
                            <td>
                                <button className="" onClick={(e) => deleteExpense(item._id)}><box-icon color={'red'} name="trash" /></button>
                                <button className=" " onClick={(e) => navigateToEditExpense(item._id)}><box-icon color={'gray'} name="wrench" /></button>
                            </td>
                        </tr>

                    </div>
                ))}


            </div>
        </div>







    )
}




export default ExpenseForm

import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';


const EditExpense = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneExpense, setOneExpense] = useState({})
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/expenses/${id}`)
            .then(res => setOneExpense(res.data.expense))
            .catch(err => console.log(err))
    }, [])

    const onChangeHandler = (e) => {
        setOneExpense({
            ...oneExpense,
            [e.target.name]: e.target.value
        })
    }

    const onSelectHandler = (e) => {
        console.log(e)
        setOneExpense({
            ...oneExpense,
            [e.target.name]: e.target.value

        })
    }

    const editExpense = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/expenses/${id}`, oneExpense)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <p className="d-flex justify-content-start mt-3">Edit your Expense</p>
            <form action="" className="col-md-6 mx-auto" onSubmit={editExpense}>
            <div className="mb-3">
                        {oneExpense.name && oneExpense.name.length < 3 ? <p className="text-danger" > Name must be at least 3 characters</p> : ""}
                        <label htmlFor="name" className=""> Name</label>
                        <input type="text" placeholder='Mortgage' className="form-control" name="name" id="name" onChange={onChangeHandler} value={oneExpense.name} />
                        <label htmlFor="type" className=""> Type of Expense</label>
                        <select className="form-select-input dropdown_select" id="type" value={oneExpense.type} name='type' onChange={onSelectHandler}>
                            <option value="Housing">Housing</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Groceries">Groceries</option>
                            <option value="Car Payment">Car Payment</option>
                            <option value="Savings">Savings</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Investment">Investment</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>
                    <div className="mb-3">
                        {oneExpense.type && oneExpense.type.length < 1 ? <p className="text-danger"> Store number must be greater than 0</p> : ""}
                        <label htmlFor="amount">Amount</label>
                        <input type="text" placeholder='$2500' className="form-control" name="amount" id="amount" onChange={onChangeHandler} />

                    </div>

                    <button className="btn btn-primary">Add Expense</button>
                </form>
        </div>
    )
}

export default EditExpense
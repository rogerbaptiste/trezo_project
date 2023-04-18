import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';


const SelectedExpense = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [oneExpense, setOneExpense] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/expenses/${id}`)
            .then(res => setOneExpense(res.data.expense))
            .catch(err => console.log(err))
    }, [])

    // Delete 
    const deleteExpense = (e) => {
        axios.delete(`http://localhost:8000/api/expenses/${id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))

    }

    const navigateToEditExpense = (e) => {
        navigate(`/api/expense/${id}/edit`)
    }

    return (
        <div>

            <p>{oneExpense.name}</p>
            <p>StoreNumber: {oneExpense.type}</p>
            <p>{oneExpense.amount}</p>

            <button className="btn btn-primary me-3 " onClick={(e) => navigateToEditExpense(oneExpense._id)}>Edit Store</button>
            <button className="btn btn-danger" onClick={deleteExpense}>Delete </button>
        </div>
    )
}

export default SelectedExpense
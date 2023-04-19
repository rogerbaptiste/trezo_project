This full stack app is created using MERN. 

This is particularly created to help people budget their monthly spending while also educating them on a few good economical habits.



import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js"
import Categories from './Categories'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import ExpenseList from './ExpenseList'
import ExpenseForm from "./ExpenseForm";

//use State and see if we can pull an axios call. 
// add a new array to getAll and set to  var 
// https://www.youtube.com/watch?v=yOousFGfmZc


// console.log expenses, so you can save the data type, create a new let variable (so that it can be changed equal to an array) iterate through the array for loops, or enhanced for loop, push the information to a new variable, set expense amount to the new variable the information your looking for, is going to expenses.amount

// const savingsAdjustment = (everything) => {
//     let total = incomeTotal(everything)- expenseTotal(everything) ;
//     console.log(total,"Total ")
//     return total;
//   }

const Graph = () => {

    const [allExpenses, setAllExpenses] = useState([])
    // const [expenseAmount, setExpenseAmount] = useState([])

    // const calculateExpenses = (expenses) => {

    // }

    // Chart.register(ArcElement);



    // const config = () => {
    //     const graphData = {
    //         data: {
    //             datasets: [{
    //                 data: allExpenses[1]?.amount,
    //                 backgroundColor: [
    //                     'rgb(255, 99, 132)',
    //                     'rgb(54, 162, 235)',
    //                     'rgb(255, 205, 86)'
    //                 ],
    //                 hoverOffset: 4,
    //                 borderRadius: 10,
    //                 spacing: 10
    //             }]
    //         },
    //         chartProperties: {
    //             cutout: 115
    //         }
    //     }
    //     return graphData
    // }

    useEffect(() => {
        axios.get('http://localhost:8000/api')
            .then((res) => (
                setAllExpenses(res.data.expenses)),
                console.log('returning api', allExpenses))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log(allExpenses)
    }, [allExpenses])

    return (
        <div className='flex justify-content max-w-xs-auto'>
            {/* <Categories/>
                    <ExpenseList/> */}
            <div className='item'>
                <div className='chart relative'>
                    {/* {calculateExpenses(allExpenses)} */}
                    {/* <Doughnut {...config} /> */}
                    <h3 className='title'>Total
                        <span className='block text-3xl text-emerald-400'> ${0}</span>
                    </h3>
                </div>
                <div className='flex flex-col py-10 gap-4'>
                </div>
            </div>
        </div>
    )
}
export default Graph
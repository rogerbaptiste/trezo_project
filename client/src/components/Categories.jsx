import React from "react";

const obj = [
    {
        type: "Housing",
        color: '#f9c74f',
        percent: 50
    },
    {
        type: "Utilities",
        color: '#f9c74f',
        percent: 20
    },
    {
        type: "Groceries",
        color: '#f9c74f',
        percent: 20
    },
    {
        type: "Car Payment",
        color: '#f9c74f',
        percent: 10
    },
    {
        type: "Savings",
        color: '#f9c74f',
        percent: 20
    },
    {
        type: "Insurance",
        color: '#f9c74f',
        percent: 5
    }, 
    {
        type: "Investment",
        color: '#f9c74f',
        percent: 10
    }, 
    {
        type: "Credit Card",
        color: '#f9c74f',
        percent: 25
    },
    {
        type: "Other",
        color: '#f9c74f',
        percent: 3
    },

]
const CategoryTypes = ({data}) => {
    if(!data) 
    return false;

    return (

        <div className="d-flex justify-content-evenly">
            <span className="legend"style={data.color ??'#f9c74f'}>{data.color ?? '#f9c74f'}</span>
            <h3 className="">{data.type ?? 0}</h3>
            <h3 className="'font-bold">{data.percent ?? 0 }%</h3>
        </div>

    )
}

const Categories = () => {
    return (
        <>
            {obj.map((expense, amount) =><Categories key = {amount} data={expense}/>)}
        </>
    )
}

export default Categories

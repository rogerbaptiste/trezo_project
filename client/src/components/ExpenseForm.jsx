import React from 'react'

const NavBar = () => {
    return (
        <div className=''>
            <h1 className=''>Transaction</h1>
            <form action="">
                <div className='grid gap-4'>
                    <input type="text" placeholder='Gas Bill, House Rent' />
                    <select className="form-input" id="">
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
                    <input type="text" placeholder='Amount' />
                    <button className='submit-btn'>Add Expense</button>
                </div>

            </form>
        </div>
    )
}

export default NavBar
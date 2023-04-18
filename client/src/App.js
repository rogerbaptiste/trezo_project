import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
// import NavBar from './components/NavBar';
import Graph from './components/Graph';
import ExpenseForm from './components/ExpenseForm'
import Categories from './components/Categories';
import Dashboard from './components/Dashboard';
import SelectedExpense from './components/SelectedExpense';
import EditExpense from './components/EditExpense';
import { BoxIconElement } from 'boxicons';

function App() {

  // useEffect(() => {
  //   axios.get("http://localhost:8000")
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  return (
     <BrowserRouter>
    
    <div className="App">
      <div className='container mx-auto max-w-6xl'>

      <h1 className='text-6xl py-8 mb-10 text-slate rounded'><box-icon color ={'green'} name="money"/>Budget Buddy<box-icon color ={'green'} name="money"/></h1>
      {/* <NavBar /> */}

      {/* Class creates columns  */}
      <div className='grid md:grid-cols-2 gap-4'>
      {/* <Chart/> */}
      {/* <Categories/> */}
      <Graph/>
      {/* <ExpenseForm/>
      */}
      
      <Routes>
        < Route element={<ExpenseForm/>} path="/expenses/create"/>
        < Route element={<Dashboard/>} path="/"/>
        < Route element={<SelectedExpense/>} path="/expenses/:id"/>
        < Route element={<EditExpense/>} path="/expenses/:id/edit"/>
      </Routes>
{/* 
      <ExpenseForm/>
      <Dashboard/>
      <SelectedExpense/>
      <EditExpense/> */}

      </div>

      </div>

    </div>
     </BrowserRouter>
  );
}

export default App;

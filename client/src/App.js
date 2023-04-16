import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Graph from './components/Graph';
import ExpenseForm from './components/ExpenseForm'
function App() {

  useEffect(() => {
    axios.get("http://localhost:8000")
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <div className='container mx-auto max-w-6xl'>

      <h1 className='text-4xl py-8 mb-10 bg-slate-800 text-white rounded'>Budget Buddy</h1>
      <NavBar />

      {/* Class creates columns  */}
      <div className='grid md:grid-cols-2 gap-4'>
      {/* <Chart/> */}
      <Graph/>
      <ExpenseForm/>

      </div>

      </div>

    </div>
  );
}

export default App;

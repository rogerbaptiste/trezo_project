import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  useEffect(() => {
    axios.get("http://localhost:8000")
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <NavBar />


    </div>
  );
}

export default App;

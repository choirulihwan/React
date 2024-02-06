import { useState } from 'react'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const isLogedIn = window.localStorage.getItem("isLogedIn");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isLogedIn ? <Home /> : <Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>      
    </BrowserRouter>
  )
}

export default App

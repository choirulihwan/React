import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Login } from './components/Login';
import { Register } from './components/Register';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import Layout from './components/shared/Layout'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login /> } />
          <Route path='/register' element={<Register /> } />
          <Route path='/dashboard' element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
      </Routes>        
    </BrowserRouter>
  );
}

export default App

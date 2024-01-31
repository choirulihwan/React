import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Laptop from './components/Laptop';
import Handphone from './components/Handphone';
import Purchasing from './components/Purchasing';
import Selling from './components/Selling';
import Invoices from './components/Invoices';
import Order from './components/Order';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/handphone" element={<Handphone />} />
          <Route path="/purchasing" element={<Purchasing />} />
          <Route path="/selling" element={<Selling />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/orders" element={<Order />} />
        </Route>
        <Route path='login' element={<div>Login page</div>} />
      </Routes>
    </Router>
  );
}

export default App

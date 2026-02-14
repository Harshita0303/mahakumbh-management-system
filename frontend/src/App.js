import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SlotBooking from './pages/SlotBooking';
import CrowdPrediction from './pages/CrowdPrediction';
import RoutePlanner from './pages/RoutePlanner';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/slots" element={<SlotBooking />} />
        <Route path="/predictions" element={<CrowdPrediction />} />
        <Route path="/routes" element={<RoutePlanner />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

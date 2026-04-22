import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // The global brick
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Syllabus from './pages/Syllabus';

export default function App() {
  return (
    <Router>
      <Header /> {/* This ensures the header is on ALL pages below */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/syllabus" element={<Syllabus />} />
      </Routes>
    </Router>
  );
}
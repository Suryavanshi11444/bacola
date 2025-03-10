import React from 'react';
import './App.css';
import Home from './pages/Home/index';
import Header from './Components/Header/index';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='app-container mx-auto'>
      <Router>
        <Header />
        <Routes>
      
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
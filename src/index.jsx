import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './travel_deals';
import About from './About';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/travel_deals' element={<Navbar />} />
      <Route path='/about' element={<About />} />
      <Route path='/' element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

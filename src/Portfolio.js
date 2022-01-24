import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

function Portfolio() {
  return (
      <div>
      <Router>
        <div className='portfolio'>
          <div className='sub-portfolio'><Link to="/"> Strona główna </Link> </div>
          <div className='sub-portfolio'><Link to="/"> Strona główna </Link> </div>
          <div className='sub-portfolio'><Link to="/"> Strona główna </Link> </div>
          <div className='sub-portfolio'><Link to="/"> Strona główna </Link> </div>
          <div className='sub-portfolio'><Link to="/"> Strona główna </Link> </div>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Home />} />
        </Routes>
    
    </Router>
    </div>
 );
}

export default Portfolio;

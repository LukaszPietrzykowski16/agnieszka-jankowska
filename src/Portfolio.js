import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import img1 from './images/IMG_9425a.jpg';

function Portfolio() {
  return (
      <div>
      <Router>
        <div className='portfolio'>
          <div className='sub-portfolio'> <Link to="/"> <img src={img1}/> Reportaż ślubny </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img1}/> Plenerowe sesje ślubne </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img1}/> Chrzest Święty - reportaż </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img1}/> Chrzest Święty - plener </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img1}/> Chrzest Święty - reportaż </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img1}/> Chrzest Święta - plener </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img1}/> Sesja portetowa </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img1}/> Sesje rodzinne </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img1}/> 18nastki </Link> </div>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Home />} />
        </Routes>
        <div className='porfolio-button-div'>
        <button className='portfolio-button'> Zobacz portfolio </button>
        </div>
    </Router>
    </div>
 );
}

export default Portfolio;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import img1 from './images/IMG_9425a.jpg';
import img2 from './images/portfolio/IMG_6122.jpg';
import img3 from './images/portfolio/IMG_2887.jpg';
import img4 from './images/portfolio/7.jpg';
import img5 from './images/portfolio/0138.jpg';
import img6 from './images/portfolio/13.jpg';
import img7 from './images/portfolio/IMG_6122.jpg';
import img8 from './images/portfolio/IMG_2887.jpg';
import img9 from './images/portfolio/IMG_7111.jpg';
import img10 from './images/portfolio/IMG_7111.jpg';

function Portfolio() {
  return (
   
      <Router>
        <div className='portfolio'>
          <div className='sub-portfolio'> <Link to="/"> <img src={img3}/> Reportaż ślubny </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img2}/> Plenerowe sesje ślubne </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img4}/> Chrzest Święty - reportaż </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img10}/> Chrzest Święty - plener </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img6}/> Chrzest Święty - reportaż </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img5}/> Chrzest Święta - plener </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img7}/> Sesja portetowa </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img8}/> Sesje rodzinne </Link> </div>
          <div className='sub-portfolio'> <Link to="/"> <img src={img9}/> 18nastki </Link> </div>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Home />} />
        </Routes>
        <div className='porfolio-button-div'>
        <button className='portfolio-button'> Zobacz portfolio </button>
        </div>
    </Router>
   
 );
}

export default Portfolio;

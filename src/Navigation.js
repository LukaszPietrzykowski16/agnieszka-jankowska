import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Content from './Content';
import About from './About';
import Portfolio from './Portfolio';

function Navigation() {
  return (
   <>
   <nav> 
    <div className='logo'>
    There will be a logo
    </div>
    <Router>
        <div className='navigation'>
          <div className='sub-nav'><Link to="/"> Strona główna </Link> </div>
          <div className='sub-nav'> <Link to="/"> Galeria </Link> </div>
          <div className='sub-nav'> <Link to="/"> Kontakt </Link> </div>
          <div className='sub-nav'> <Link to="/"> Oferta </Link> </div>
          <div className='sub-nav'> <Link to="/"> O mnie </Link> </div>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Home />} />
        </Routes>
    
    </Router>
   </nav>
   <Content />
   <About /> 
   <Portfolio />
   </>
  );
}

export default Navigation;

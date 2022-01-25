import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Content from './Content';
import About from './About';
import Portfolio from './Portfolio';
import Offer from './Offer';
import Contact from './Contact';
import Social from './Social';
import Footerelement from './Footerelement';

function Navigation() {
  
  const [navigation, setNabiagtion] = set
  
  return (
   <>
   <nav> 
    <div className='logo'>
    There will be a logo
    </div>
    <Router>
        <div className='navigation'>
        <div className='sub-nav'><Link to="/"> STRONA GŁÓWNA </Link> </div>
          <div className='sub-nav'><Link to="/"> PORTFOLIO </Link> </div>
          <div className='sub-nav'><Link to="/"> OFERTA </Link> </div>
          <div className='sub-nav'><Link to="/"> KONTAKT </Link> </div>
          <div className='sub-nav'><Link to="/"> O MNIE </Link> </div>
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
   <Offer /> 
   <Contact />
   <Social />
   <Footerelement />
   </>
  );
}

export default Navigation;

import React, {useEffect, useState, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './Home';
import Content from './Content';
import About from './About';
import Portfolio from './Portfolio';
import Offer from './Offer';
import Contact from './Contact';
import Social from './Social';
import Gallery from './Galeria';
import Oferta from './Oferta';
import Kontakt from './Kontakt';
import Photos from './Photos';
import Omnie from './OMnie';
import Footerelement from './Footerelement';
import logo from './images/logo.png';

import gsap from 'gsap';
import {Power4} from 'gsap';
import Reportaz from './Reportaz';

function Navigation() {
  
  const [menu, setMenu] = useState(false);

  const hideMenu = (menu) => {
    if (menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
    
  }
  
  function animation() {
      gsap.to('.transition-effect', {
        duration: 5,
        x: 2700,
        ease: Power4.easeOut,
        opacity: 0
    })
    console.log('bruh')
    
  }
  


  return (
   <>
 
    
    <Router>
        <div className='navigation'>
        <div className='logo'>
        <img src={logo}/>
        </div>
        <div className='navigation-desktop'>
          <div className='sub-nav' onClick={() => animation}><Link to="/"> STRONA GŁÓWNA </Link> </div>
          <div className='sub-nav'><Link to="/gallery"> PORTFOLIO </Link> </div>
          <div className='sub-nav'><Link to="/oferta"> OFERTA </Link> </div>
          <div className='sub-nav'><Link to="/kontakt"> KONTAKT </Link> </div>
          <div className='sub-nav'><Link to="/o-mnie"> O MNIE </Link> </div>
        </div>

        <div className='navigation-mobile'>
          <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}> BRUH </div>
          <div className={menu ?  "menu-open": "menu-close"}>
            <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/"> STRONA GŁÓWNA </Link> </div>
            <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/gallery"> PORTFOLIO </Link> </div>
            <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/oferta"> OFERTA </Link> </div>
            <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/kontakt"> KONTAKT </Link> </div>
            <div className='sub-nav-mobile' onClick={() => hideMenu(menu)}><Link to="/o-mnie"> O MNIE </Link> </div>
          </div>
        </div>
        
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/oferta" element={<Oferta />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/o-mnie" element={<Omnie />} />
            <Route path="/reportaz-slubny" element={<Reportaz />} />
        </Routes>
    
    </Router>
  
    
   <Footerelement />
   </>
  );
}

export default Navigation;

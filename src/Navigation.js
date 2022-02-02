import React, {useState} from 'react';
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

function Navigation() {
  
  const [navigation, setNabiagtion] = useState(true) 

  
  
  return (
   <>
 
    
    <Router>
        <div className='navigation'>
        <div className='logo'>
         There will be a logo
          </div>
          <div className='sub-nav'><Link to="/"> STRONA GŁÓWNA </Link> </div>
          <div className='sub-nav'><Link to="/gallery"> PORTFOLIO </Link> </div>
          <div className='sub-nav'><Link to="/oferta"> OFERTA </Link> </div>
          <div className='sub-nav'><Link to="/kontakt"> KONTAKT </Link> </div>
          <div className='sub-nav'><Link to="/o-mnie"> O MNIE </Link> </div>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/oferta" element={<Oferta />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/o-mnie" element={<Omnie />} />
            <Route path="/reportaz-slubny" element={<Photos />} />
        </Routes>
    
    </Router>
  
    
   <Footerelement />
   </>
  );
}

export default Navigation;

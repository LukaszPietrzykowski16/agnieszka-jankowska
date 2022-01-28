import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footerelement() {
   return (
   <>
   <footer>
     <div className='footer-up'>
     <div className='footer-class'>
      Kontakt
     </div>
     <div className='footer-class'>
       Social Media
       <p> <FontAwesomeIcon icon={ faFacebook } />  <FontAwesomeIcon icon={ faInstagram } />   </p> 
    
     </div>
     <div className='footer-class'>
       Tutaj logo
     </div>
     <div className='footer-class'>
       <button> Do góry! </button>
     </div>
     </div>
     <div className='footer-down'>
       Wszelkie prawa zastrzeżone, strona stworzona przez Łukasza Pietrzykowskiego
     </div>
     
    </footer> 
    </>
    );
 
 
}

export default Footerelement;

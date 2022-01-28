import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Kontakt() {
  return (
      <>
    <div className='oferta-baner'>
      
    </div>
      <div className='contact'>
      <h1> Kontakt </h1>
      <p>  <FontAwesomeIcon icon={ faPhoneAlt  } />  Telefon: 725 209 990 </p>
      <p> <FontAwesomeIcon icon={ faEnvelope  } /> Email: f.f.agnieszkajankowska@gmail.com </p>
  </div>
  <div className='portfolio-button'>
        <h1> Zapraszam na social media! </h1>
    </div>
     <div className='social'>
        <div className='social-fb'> fb <FontAwesomeIcon icon={ faFacebook } /> </div>
        <div className='social-ig'> ig <FontAwesomeIcon icon={ faInstagram } />  </div>
     </div>
  </>);
}

export default Kontakt;

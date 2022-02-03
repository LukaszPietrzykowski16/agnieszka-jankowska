import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Social() {
  return (
      <>
    <div className='portfolio-button'>
        <h1> Zapraszam na social media! </h1>
    </div>
     <div className='social'>
        <div className='social-fb' > <FontAwesomeIcon icon={ faFacebook }  /> <p> Facebook </p> </div>
        <div className='social-ig'> <FontAwesomeIcon icon={ faInstagram } /> <p> Instagram </p></div>
     </div>
     </>
 );
}

export default Social;

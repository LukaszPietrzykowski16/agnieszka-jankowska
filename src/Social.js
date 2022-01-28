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
        <div className='social-fb'> fb <FontAwesomeIcon icon={ faFacebook } /> </div>
        <div className='social-ig'> ig <FontAwesomeIcon icon={ faInstagram } />  </div>
     </div>
     </>
 );
}

export default Social;

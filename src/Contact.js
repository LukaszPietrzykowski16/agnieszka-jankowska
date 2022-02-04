import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
  <div className='contact'>
      <h1> KONTAKT </h1>
      <div className='contact-subsection'>
        <p>  <FontAwesomeIcon icon={ faPhoneAlt  } />  Telefon: </p> <p>  725 209 990 </p>
        <p> <FontAwesomeIcon icon={ faEnvelope  } /> Email: f.f.agnieszkajankowska@gmail.com </p>
      </div>
      
  </div>);
}

export default Contact;

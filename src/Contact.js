import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
  <div className='contact'>
      <h1> Kontakt </h1>
      <p>  <FontAwesomeIcon icon={ faPhoneAlt  } />  Telefon: 725 209 990 </p>
      <p> <FontAwesomeIcon icon={ faEnvelope  } /> Email: f.f.agnieszkajankowska@gmail.com </p>
  </div>);
}

export default Contact;

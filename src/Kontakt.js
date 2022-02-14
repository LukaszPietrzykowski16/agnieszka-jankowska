import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Kontakt() {
  return (
      <>
<div className='contact'>
      <h1> KONTAKT </h1>
      <div className='contact-subsection'>
        <div className='contact-phone'>  <FontAwesomeIcon icon={ faPhoneAlt  } /> Telefon:  725 209 990  </div>
        <div className='contact-email'> <FontAwesomeIcon icon={ faEnvelope  } /> Email: f.f.agnieszkajankowska@gmail.com  </div>
      </div>
      
  </div>

    <div className='form'>
    <form>
  <label>
    Imię:
    <input type="text" name="name" />
  </label>
  <label>
    E-mail:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Wyślij" />
</form>
    </div>
   
  </>);
}

export default Kontakt;

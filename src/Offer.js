import React from 'react';
import img1 from './images/IMG_9425a.jpg';

function Offer() {
  return (
  <div className='offer'>
       <div className='offer-photo'>
        <img src={img1}/>
       </div>
       <div className='offer-text'>
           <h1> Co oferuje? </h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
  </div>);
}

export default Offer;

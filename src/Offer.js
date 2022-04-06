import React, {useState, useEffect} from 'react';
import img1 from './images/portfolio/offer/img1.jpg';
import img2 from './images/portfolio/offer/img2.jpg';
import img3 from './images/portfolio/offer/img3.jpg';
import img4 from './images/portfolio/offer/img4.jpg';
import img5 from './images/portfolio/offer/img5.jpg';
import img6 from './images/portfolio/offer/img6.jpg';
import { Transition } from 'react-transition-group';
// import { gsap, TimelineMax } from 'gsap';

// https://greensock.com/forums/topic/20618-how-to-add-dynamic-animated-sliders/
// https://stackoverflow.com/questions/55597102/react-state-hook-toggle-a-class
function Offer() {

  const imageArray = [img1, img2, img3, img4, img5, img6]

  const [index, setIndex] = useState(0);
  
  const [image, setImage] = useState(imageArray[index])
 
  const [fadingimg, setFading] = useState(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
    
     setIndex( index + 1)
     setImage(imageArray[index])
   
  
      
    fadingimg === true ? setFading(false) : setFading(true)
      
        /*
     const [menu, setMenu] = useState(false);


     const hideMenu = (menu) => {
       if (menu === true) {
         setMenu(false);
       } else {
         setMenu(true);
       }
       
     }

*/
     if (index === imageArray.length - 1){
       setIndex(0)
     }

    }, 2000)
    
    return () => {
      clearInterval(interval);
    }
    
  })



  return (
  <div className='offer'>
       <div className={setFading === true ? 'offer-photo active' : 'offer-photo hide'}>
        <img src={image}/>
       </div>
       <div className='offer-text'>
         <div className='offer-sub-text'>
         <h1> Co oferuje? </h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
         </div>
    
        </div>
  </div>);
}

export default Offer;

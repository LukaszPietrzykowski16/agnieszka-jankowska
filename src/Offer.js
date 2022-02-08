import React, {useState, useEffect} from 'react';
import img1 from './images/portfolio/7.jpg';
import img2 from './images/portfolio/6.jpg';
import img3 from './images/portfolio/13.jpg';
import gsap from "gsap";
// https://greensock.com/forums/topic/20618-how-to-add-dynamic-animated-sliders/
function Offer() {

  const imageArray = [img1, img2, img3]

  const [index, setIndex] = useState(0);
  
  const [image, setImage] = useState(imageArray[index])
 
  useEffect(() => {
    const interval = setInterval(() => {
      
    
     setIndex( index + 1)
     setImage(imageArray[index])
     if (index === imageArray.length - 1){
       setIndex(0)
     }
    
    }, 8100)
    
    return () => {
      clearInterval(interval);
    }
  })
/*
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to('.offer-photo', {
        opacity: 0,
       }) 
    }, 3000)
    
    
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to('.offer-photo', {
        opacity: 1,
       }) 
    }, 4000)
   
  }, [])

 */



  return (
  <div className='offer'>
       <div className='offer-photo'>
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

import React, {useState, useEffect} from 'react';
import img1 from './images/IMG_9425a.jpg';
import img2 from './images/portfolio/IMG_6122.jpg';
import img3 from './images/portfolio/IMG_2887.jpg';
import img4 from './images/portfolio/7.jpg';
import img5 from './images/portfolio/0138.jpg';
import img6 from './images/portfolio/13.jpg';
import img7 from './images/portfolio/IMG_6122.jpg';
import img8 from './images/portfolio/IMG_2887.jpg';
import img9 from './images/portfolio/IMG_7111.jpg';
import img10 from './images/portfolio/IMG_7111.jpg';
import  gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Galeria() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
     
    gsap.from('.test-gallery-subsection', {scrollTrigger: {
      trigger: '.test-gallery-subsection',
      toggleActions: 'play none none none'},
      duration: 1.5, 
      ease: "slow(0.7, 0.7, false)", 
    
      y: 150 
    })
          
  }, [])

  return ( <>  
  
  <div className='test-gallery'>
    <div className='test-gallery-subsection'>
      <div className='test-gallery-subsection-img'>
        <img src={img2}/>
      </div>
      <div className='test-gallery-subsection-txt'>
    
        <p> 
        <h1> Reportaż ślubny </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
      </div>
    </div>

    <div className='test-gallery-subsection'>

    
    <div className='test-gallery-subsection-txt'>
    
    <p> 
    <h1> Plenerowe sesje ślubne </h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
  </div>
      
  <div className='test-gallery-subsection-img'>
        <img src={img3}/>
      </div>
     
      
    </div>

    <div className='test-gallery-subsection'>
      <div className='test-gallery-subsection-img'>
        <img src={img4}/>
      </div>
      <div className='test-gallery-subsection-txt'>
    
        <p> 
        <h1> Chrzest święty - reportaż </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
      </div>
    </div>

    <div className='test-gallery-subsection'>
     
      <div className='test-gallery-subsection-txt'>
    
        <p> 
        <h1>  Chrzest święty - plener </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
      </div>
      <div className='test-gallery-subsection-img'>
        <img src={img5}/>
      </div>
    </div>

    <div className='test-gallery-subsection'>
      <div className='test-gallery-subsection-img'>
        <img src={img2}/>
      </div>
      <div className='test-gallery-subsection-txt'>
    
        <p> 
        <h1> Reportaż ślubny </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
      </div>
    </div>

    <div className='test-gallery-subsection'>
    
      <div className='test-gallery-subsection-txt'>
    
        <p> 
        <h1> Reportaż ślubny </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et ex quis eros viverra rutrum. Nulla imperdiet ante sit amet ultrices iaculis. Praesent ullamcorper mi eu risus viverra ultricies. Curabitur volutpat ultrices mauris eget fringilla. Praesent mollis semper congue. </p>
      </div>

      <div className='test-gallery-subsection-img'>
        <img src={img2}/>
      </div>
    </div>
    
  </div>

  </>
  )
}



import React, { useState}  from 'react';
import './App.scss';
import img0 from './images/portfolio/reportaz-slubny/img0.jpg';
import img1 from './images/portfolio/reportaz-slubny/img1.jpg';
import img2 from './images/portfolio/reportaz-slubny/img2.jpg';
import img3 from './images/portfolio/reportaz-slubny/img3.jpg';
import img4 from './images/portfolio/reportaz-slubny/img4.jpg';
import img5 from './images/portfolio/reportaz-slubny/img5.jpg';
import img6 from './images/portfolio/reportaz-slubny/img6.jpg';
import img7 from './images/portfolio/reportaz-slubny/img7.jpg';

const Reportaz = () => {
    
    const imageList = [
        {id: 0,
        imageUrl: img0}, 
        {id: 1,
            imageUrl: img1},
        {id: 2,
            imageUrl: img2},
        {id: 3,
            imageUrl: img3},
        {id: 4,
            imageUrl: img4},
        {id: 5,
            imageUrl: img5},
        {id: 6,
            imageUrl: img6},
        {id: 7,
            imageUrl: img7}
            
    ]

    const [lightbox, setLightbox] = useState(false);
    
    const showGallery = (index) => {
        setValue(index)
        console.log(index)
        setLightbox(true)
    }

    const image = imageList.map((singleImage) => {
        return singleImage.imageUrl
      })
    
    let [index, setValue] = useState(0);
    
    
    const hideGallery = (lightbox) => {
        setLightbox(false)
    }
    
    const leftSlide = (index) => {
        if (index === 0) {
            index = image.length;
          }
          setValue(index - 1)  
    }

    const rightSlide = (index) => {
        if (index === 0) {
            index = image.length;
          }
          setValue(index - 1)  
    }


    return (
        <>
         <div className={lightbox ? "gallery-open": "gallery-close"} >
            <img src={image[index]}/>
            <div className='exit' onClick={() => hideGallery(lightbox)}> x </div>
            <div className='left-arrow' onClick={() =>  leftSlide(index)}> LEWO </div>
            <div className='right-arrow' onClick={() => rightSlide(index)}> PRAWO </div>
        </div>
        <div className='gallery-portfolio'>
        {imageList.map((singlePhoto) => {
            return (
                <div className={"pic"} onClick={() => showGallery(singlePhoto.id)}>
                    <img src={singlePhoto.imageUrl}/>
                </div>
            )
        })}
        </div>
      
        </>
    )
}


export default Reportaz; 
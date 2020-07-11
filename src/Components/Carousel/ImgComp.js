<<<<<<< HEAD
import React from 'react';

function ImgComp({ src }) {
  
  return <img src={src} alt="carousel-img" style={{width:"100%", height: "33vw"}}></img>;
=======
import React from 'react'

function ImgComp({ src }) {
    let imgStyles = {
        width: 100+"%",
        height: 100+"%"    
    }
    return (
        <img src={src} alt="carousel-img" style={imgStyles}></img>
    )
>>>>>>> 043270acd292a954decedffd5c3f8d633a963c2a
}

export default ImgComp;

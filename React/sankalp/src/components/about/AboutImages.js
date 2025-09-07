import React from 'react'
import Image1 from "../../assets/Images/aboutus1.webp"
import Image2 from "../../assets/Images/aboutus2.webp"
import Image3 from "../../assets/Images/aboutus3.webp"



const AboutImages = () => {
  return (
    <div className='flex'>
       <div><img src={Image1} alt='about-image' /></div>
       <div><img src={Image2} alt='about-image' /></div>
       <div><img src={Image3} alt='about-image' /></div>
    </div>
  )
}

export default AboutImages

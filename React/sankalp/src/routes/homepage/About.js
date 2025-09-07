import React from 'react'
import Reviews from '../../components/common/Reviews'
import Highlight from '../../components/common/Highlight'
import AboutImages from '../../components/about/AboutImages'
import SVM from '../../components/about/SVM'
import InfoSection from '../../components/about/InfoSection'


const About = () => {
  return (
    <div className='flex flex-col gap-5'>

       <div><p>Driving Innovation in Online Education for a <Highlight>Brighter Future</Highlight></p></div>

       <div><p>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community</p></div>

       <AboutImages/>

       <div><p>We are passionate about revolutionizing the way we learn. Our innovative platform <Highlight>combines technology,</Highlight> expertise, and community to create an <Highlight>unparalleled educational experience.</Highlight></p></div>

       <div className='h-0.5 bg-white'></div>

       <SVM/>

       <InfoSection/>

       <Reviews/>

    </div>
  )
}

export default About

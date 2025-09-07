import React from 'react'
import InstructorImage from "../../assets/Images/Instructor.png"
import Highlight from '../common/Highlight'
import Button from '../common/Button'
import { FaArrowRightLong } from "react-icons/fa6";
import Reviews from '../common/Reviews';

const SectionC = () => {
  return (
    <div className='bg-richblack-800 flex flex-col justify-between items-center gap-10 m-5'>

      <div className='flex items-center justify-between'>
        <div className='shadow-[20px_20px_rgba(255,255,255)] m-10'><img src={InstructorImage} alt='instructor-image'/></div>
        <div className='flex flex-col items-center gap-5 w-[50%]'>
          <div><p>Become an <Highlight>Instructor</Highlight></p></div>
          <div><p>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p></div>
          <div className='bg-yellow-50 w-max flex items-center'>
            <Button text={"Start Teaching Today"} linkTo={"/signup"} active={true}/>
            <FaArrowRightLong/>
          </div>
        </div>
      </div>

      <div>
        <Reviews/>
      </div>
      
    </div>
  )
}

export default SectionC

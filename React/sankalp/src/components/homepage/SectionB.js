import React from 'react'
import Highlight from '../common/Highlight'
import Button from "../common/Button"
import { FaArrowRightLong } from "react-icons/fa6";
import Timeline from './sectionB/Timeline';
import TimelineImage from "../../assets/Images/TimelineImage.png"
import CampareImage from "../../assets/Images/Compare_with_others.png"
import PlanImage from "../../assets/Images/Plan_your_lessons.png"
import ProgressImage from "../../assets/Images/Know_your_progress.png"
import Skillsblock from './sectionB/Skillsblock';

const SectionB = () => {
  return (
    <div className=' flex flex-col items-center bg-pure-greys-5 text-black gap-5 '>

      <div>
        <Skillsblock/>
      </div>
       
      <div className='bg-image w-[100%] m-2.5 flex items-center justify-center gap-5'>
        <div className='flex items-center text-white bg-richblack-900'>
        <Button active={false} text={"explore full catelog"} linkTo={"/signup"} />
        <FaArrowRightLong />
        </div>
        <div><Button active={true} text={"Learn More"} linkTo={"/login"} /></div>
      </div>

      <div className='m-2.5 flex items-center justify-evenly'>
        <div className='w-[40%]'><p>Get the skills you need for a <Highlight>job that is in demand.</Highlight></p></div>
        <div className='w-[40%] flex flex-col items-center'>
          <p>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
          <Button active={true} text={"Learn More"} linkTo={"/login"} />
        </div>
      </div>

      <div className='m-2.5 flex items-center justify-between w-11/12'>
        <div>
           <Timeline></Timeline>
        </div>
        <div className='w-[50%]'>
          <img src={TimelineImage} alt='timeline'/>
          <div className='flex bg-caribbeangreen-500 items-center justify-evenly'>
            <div className='flex'>
              <p>10+</p>
              <p>years of expirience</p>
            </div>
            <div className='flex'>
              <p>250+</p>
              <p>types of courses</p>
            </div>
          </div>
        </div>
      </div>

      <div className='m-2.5 flex flex-col items-center justify-between'>
        <div><p>Your swiss knife for <Highlight>learning any language</Highlight></p></div>
        <div><p>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p></div>
        </div>

      <div className='flex'>
        <div><img src={ProgressImage} alt='progress'/></div>
        <div><img src={CampareImage} alt='campare'/></div>
        <div><img src={PlanImage} alt='planning'/></div>
      </div>

      <div className='text-white'><Button active={false} text={"Learn More"} linkTo={"/signup"}/></div>
      
    </div>
  )
}

export default SectionB

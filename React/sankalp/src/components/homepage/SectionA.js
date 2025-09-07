import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Highlight from '../common/Highlight';
import Banner from "../../assets/Images/banner.mp4"
import Codeblocks from './sectionA/Codeblocks';
import Button from '../common/Button';

const SectionA = () => {
  return (
    <div className='flex flex-col items-center m-5'>
      
      <div className='flex m-2.5 items-center'>
        <p>Become an Instructor</p>
        <FaArrowRightLong />
      </div>

      <div className='m-2.5 '><p>Empower Your Future with <Highlight>Coding Skills</Highlight></p></div>

      <div className='m-2.5 w-[80%] text-center'><p>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p></div>

      <div className='flex m-2.5'>
        <Button linkTo={"/signup"} text={"Learn More"} active={false} />
        <Button linkTo={"/login"} text={"Book Now"} active={true} />
      </div>

      <div className='m-5 shadow-[20px_20px_rgba(255,255,255)]'>
        <video autoPlay loop muted className='shadow-[10px_-5px_50px_-5px] shadow-blue-200'> 
          <source src={Banner} type="video/mp4"/>
        </video>
      </div>

      <div className='m-2.5'>
         <Codeblocks 
             active={true}
             btnA={"try it yourself !"}
             btnB={"Learn More"}
             linkTo="/signup"
             text='Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.'
             code={'<!DOCTYPE html> \n <html lang="en"> \n <head> \n <title>This is myPage</title> \n </head> \n <body> \n <h1><a href="/">Header</a></h1> \n <nav> <a href="/one">One</a> <a href="/two">Two</a> \n </nav> \n </body>'}
             >Unlock your <Highlight>coding potential</Highlight> with our online courses.</Codeblocks>
      </div>

      <div className='m-2.5'>
          <Codeblocks
              active={false}
              btnA={"Continue Lesson"}
              btnB={"Learn More"}
              linkTo="/signup"
              text="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              code={'import React from "react"; \n import CTAButton from "./Button"; \n import TypeAnimation from "react-type"; \n import { FaArrowRight } from "react-icons/fa"; \n \n const Home = () => { \n return( \n <div>Home</div> \n )} \n export default Home;'}
              >Start <Highlight>coding in seconds</Highlight></Codeblocks>
      </div>

    </div>
  )
}

export default SectionA

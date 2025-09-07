import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore'
import Highlight from '../../common/Highlight'



const Tags = [
  "Free",
  "New to coding",
  "Most popular",
  "Skill paths",
  "Career paths"
]

const Skillsblock = () => {

  const [tag,setTag]=useState(Tags[0])
  const [courses,setCourses] = useState(HomePageExplore[0].courses)

  const Cards = (value) => {
    setTag(value);
    const courses = HomePageExplore.filter((course)=>course.tag===value)
    setCourses(courses[0].courses)
  }

  return (
    <div className='flex flex-col justify-between items-center gap-5'>

       <div><p>Unlock the <Highlight>Power of Code</Highlight></p></div>

       <div><p>Learn to Build Anything You Can Imagine</p></div>

       <div className='flex gap-5 bg-richblack-800'>
        {
          Tags.map((element,index)=>{
            return(
              <div onClick={()=>Cards(element)} key={index} className={`flex ${tag===element ? "bg-richblack-900" : "bg-richblack-700"}`}>{element}</div>
            )
          })
        }
       </div>

       <div className='flex gap-10 w-[30%]'>
        {
          courses.map((element,index)=>{
            return (
              <div key={index}>
                 
                 
                <div >
                  <p>{element.heading}</p>
                  <p>{element.description}</p>
                </div>

                <div className='flex justify-between w-[90%]'>
                  <p>{element.level}</p>
                  <p>{element.lessionNumber}</p>
                </div>

              </div>
            )
          })
        }
       </div>

    </div>
  )
}

export default Skillsblock



      



          


             
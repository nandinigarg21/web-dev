import React from 'react'
import Button from '../common/Button'
import Highlight from '../common/Highlight'
import InfoBlock from './InfoBlock'

const data = [
    {
        title:"5k",
        description:"Active Students"
    },
    {
        title:"5k",
        description:"Active Students"
    },
    {
        title:"5k",
        description:"Active Students"
    },
    {
        title:"5k",
        description:"Active Students"
    },
]

const info = [
    {
        title:"Curriculum Based on Industry Needs",
        description:"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
    },
    {
        title:"Curriculum Based on Industry Needs",
        description:"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
    },
    {
        title:"Curriculum Based on Industry Needs",
        description:"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
    },
    {
        title:"Curriculum Based on Industry Needs",
        description:"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
    },
    {
        title:"Curriculum Based on Industry Needs",
        description:"Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs."
    },
]

const InfoSection = () => {
  return (
    <div className='flex flex-col gap-5'>

        <div className='flex bg-richblack-400 justify-around'>
           {data.map((element,index)=>{
            return (
                <div key={index}>
                    <p>{element.title}</p>
                    <p>{element.description}</p>
                </div>
            )
           })}
        </div>

        <div className='grid grid-cols-4'>
           <div className='col-span-2'>
              <div><p>World-Class Learning for <Highlight>Anyone, Anywhere</Highlight></p></div>
              <div><p>Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide</p></div>
              <div><Button active={true} text={"learn more"} linkTo={"/signup"}/></div>
           </div>
           <div><InfoBlock active={true} heading={info[0].title} description={info[0].description}/></div>
           <div><InfoBlock active={false} heading={info[1].title} description={info[1].description}/></div>
           <div className='col-start-2'><InfoBlock active={true} heading={info[2].title} description={info[2].description}/></div>
           <div><InfoBlock active={false} heading={info[3].title} description={info[3].description}/></div>
           <div><InfoBlock active={true} heading={info[4].title} description={info[4].description}/></div>
        </div>
      
    </div>
  )
}

export default InfoSection

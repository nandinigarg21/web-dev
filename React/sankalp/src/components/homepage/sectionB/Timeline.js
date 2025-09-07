import React from 'react'
import { timelineData } from '../../../data/timeline-data'

const Timeline = () => {
  return (
    <div className='gap-5'>
      {
        timelineData.map((element,index)=>{
          return (
            <div className='flex m-5' key={index}>
              <div>
                <img src={element.logo} alt='timeline-logo' />
                <div className='h-10 w-0.5 bg-black border-dashed'/>
              </div>
              <div>
                <p>{element.title}</p>
                <p>{element.Description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Timeline

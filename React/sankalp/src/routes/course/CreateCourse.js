import React from 'react'
import { useSelector } from 'react-redux'
import CCS1 from '../../components/course/CCS1'
import CCS2 from '../../components/course/CCS2'
import CCS3 from '../../components/course/CCS3'


const CreateCourse = () => {

  const {step} = useSelector((state)=>state.step)


  return (
    <div className='m-10 flex flex-col gap-10 items-center justify-center min-h-screen'>

        <div className='flex justify-center items-center'>
            <div className={`rounded-full p-2.5 bg-richblack-900 ${step===1?"bg-yellow-5 text-black":""}`}>1</div>
            <div className='h-0.5 bg-white w-40'></div>
            <div className={`rounded-full p-2.5 bg-richblack-900 ${step===2?"bg-yellow-5 text-black":""}`}>2</div>
            <div className='h-0.5 bg-white w-40'></div>
            <div className={`rounded-full p-2.5 bg-richblack-900 ${step===3?"bg-yellow-5 text-black":""}`}>3</div>
        </div>

        <div className='w-[50%]'>
         {
          step === 1 && <div><CCS1/></div>
         }
         {
          step === 2 && <div><CCS2/></div>
         }
         {
          step === 3 && <div><CCS3/></div>
         }
        </div>
      
    </div>
  )
}

export default CreateCourse

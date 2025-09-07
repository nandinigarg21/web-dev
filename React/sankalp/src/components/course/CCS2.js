import React, { useState } from 'react'
import SubSection from './SubSection'
import { setStep } from '../../store/slices/stepSlice'
import { useDispatch, useSelector } from 'react-redux'
import { createSection } from '../../services/operations/courseApis'

const CCS2 = () => { 

  const dispatch = useDispatch()

  const {token} = useSelector((state)=>state.auth)

  const {courseData} = useSelector((state)=>state.course)

    const [sectionlist,setSectionList] = useState([])

    const [sectionData,setSectionData] = useState({
      section:""
    })

    const { section } = sectionData

    const changeHandler = (e) => {
      setSectionData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
      
    }


  const addSectionHandler = async (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append("courseId", courseData._id)
    data.append("sectionName",sectionData.section)

    

    dispatch(createSection(data,token))

    setSectionList([...sectionlist,sectionData.section])
    setSectionData({...sectionData,section:""})

    
    
  }


 

  return (
    <div>

      <p>Course Builder</p>

 
        <label>
          <p>Section</p>
          <input 
                required
                type='text'
                name="section"
                value={section}
                placeholder='enter section name'
                onChange={changeHandler}
                className='form-style w-full text-black'
             />
        </label>
        <button onClick={addSectionHandler}>create section</button>
  

      <div className='bg-black flex flex-col justify-center items-center'>
        {
          sectionlist.map((e,index)=>(
           <div key={index}>
             <p>{e}</p>
            <SubSection/>
           </div>
          ))
        }
      </div>

      <button onClick={()=>{dispatch(setStep(3))}} className='bg-yellow-50'>Next</button>
      

    </div>
  )
}

export default CCS2

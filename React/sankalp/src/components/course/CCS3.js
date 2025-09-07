import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { publishCourse } from '../../services/operations/courseApis'
import {useNavigate} from "react-router-dom"

const CCS3 = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const {token} = useSelector((state)=>state.auth)

  const {courseData} = useSelector((state)=>state.course)

  const [publish,setPublish] = useState(null)

  const changeHandler = (e) => {
      setPublish(e.target.value)
  }

  return (
    <div className='flex flex-col gap-10'>

      <p>Publish Settings</p>

      <form className='flex gap-5'>
        <label className='flex'>
          <input 
             type='radio'
             name='publish'
             value="draft"
             onChange={changeHandler}
             />
          <p>draft</p>
        </label>
        <label className='flex'>
          <input 
             type='radio'
             name='publish'
             value="publish"
             onChange={changeHandler}
             />
          <p>Publish</p>
        </label>
      </form>

      <div className='flex bg-yellow-50 items-center justify-center'>
        {
          publish === "draft" ? 
          <button onClick={()=>{
            const data = new FormData()
            data.append("courseId",courseData._id)
            data.append("published",false)
            dispatch(publishCourse(token,data,navigate))}}>Draft</button>
             : <button onClick={()=>{
              const data = new FormData()
            data.append("courseId",courseData._id)
            data.append("published",true)
              dispatch(publishCourse(token,data,navigate))}}>Publish</button>
        }
      </div>
      
    </div>
  )
}

export default CCS3

import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import countrycode from "../../data/countrycode.json"
import { updateProfile } from '../../services/operations/profileApis'
import { useSelector } from 'react-redux'


const AdditionalDetails = () => {

    const dispatch = useDispatch()
    

    const {token} = useSelector((state)=>state.auth)
  
    const [formData, setFormData] = useState({
      dateOfBirth:"",
      gender:"",
      countryCode:"",
      contactNumber:"",
      about:""
    })
  
    const { dateOfBirth,gender,countryCode, contactNumber,about } = formData
  
    const changeHandler = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }

    const submitHandler = (e) => {
        e.preventDefault()
    
        dispatch(updateProfile(token,formData))

    }

  return (
    <div>
        <form onSubmit={submitHandler} className='flex flex-col gap-2.5'>
            
            <div className='flex gap-5'>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Date Of Birth</p>
              <input
                type="date"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={changeHandler}
                placeholder={Date.now()}
                className="form-style w-full text-black"
              />
            </label>

            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Gender</p>
              <select
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={changeHandler}
                  className="form-style text-black">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>

            </label>
            </div>

            <div className='flex gap-5'>
            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Phone No.</p>
              <div className='flex'>
              <select 
                type="text"
                name="countryCode"
                value={countryCode}
                onChange={changeHandler}
                className="form-style w-[25%] text-black"
                >
                {
                    countrycode.map((element,index)=>(
                        <option key={index} value={element.code}>{element.code}</option>
                    ))
                }
                </select>
              <input
                type="number"
                name="contactNumber"
                value={contactNumber}
                onChange={changeHandler}
                placeholder="123456789"
                className="form-style w-full text-black"
              />
              </div>
            </label>

            <label className="w-full">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">About</p>
              <input
                type="text"
                name="about"
                value={about}
                onChange={changeHandler}
                placeholder="enter your info"
                className="form-style w-full text-black"
              />
            </label>
            </div>

            <button type='submit' className='w-full bg-yellow-50' >Save</button>
        </form>
      
    </div>
  )
}

export default AdditionalDetails

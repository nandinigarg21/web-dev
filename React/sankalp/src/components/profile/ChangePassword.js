import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {toast} from 'react-hot-toast'
import { changePassword } from '../../services/operations/profileApis'
import { useSelector } from 'react-redux'

const ChangePassword = () => {

    const dispatch = useDispatch()

    const {token} = useSelector((state)=>state.auth)
  
    const [formData, setFormData] = useState({
      oldPassword:"",
      newPassword:""
    })
  
    const { oldPassword,newPassword } = formData
  
    const changeHandler = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (newPassword.length < 8) {
            toast.error("Password must be atleast 8 char")
            return
          }
    
        dispatch(changePassword(token,formData))

    }

  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col gap-2.5'>
      <div className='flex gap-5'>
      <label className="w-full">
                  <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Current Password <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    required
                    type="password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={changeHandler}
                    placeholder="Enter password"
                    className="form-style w-full text-black"
                  />
        </label>    
        <label className="w-full">
                  <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    New Password <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    required
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={changeHandler}
                    placeholder="Enter password"
                    className="form-style w-full text-black"
                  />
        </label>   
        </div>     
        <button type='submit' className='w-full bg-yellow-50' >Save</button>
      </form>
    </div>
  )
}

export default ChangePassword

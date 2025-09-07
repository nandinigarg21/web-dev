import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast} from 'react-hot-toast'
import Button from '../../components/common/Button'
import {resetPassword} from "../../services/operations/authApis"

const ResetPassword = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const [resetDone,setResetDone] = useState(false)


    const [formData,setFormData] = useState({
      password:""
    })
    const {password} = formData
  
  
    const changeHandler = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }

    const submitHandler = (e) => {
        e.preventDefault()
    
          if (password.length < 8) {
            toast.error("Password must be atleast 8 char")
            return
          }
  
         
          const token = location.pathname.split("/").at(-1)
          dispatch(resetPassword(password,token,setResetDone,navigate))

    
          setFormData({
            password: ""
          })
        }
    

  return (
    <div className='flex flex-col justify-center items-center gap-5 m-20'>
     {
      resetDone ? (<div>
         <p>Reset Complete !</p>

         <p>{`All done ! your password has been updated, you can now Log in`}</p>

         <Button text={"Log in"} linkTo={"/login"} active={true}/>
      </div>) : (<div>
        <p>Create New Password</p>

      <p>Almost done. Enter your new password and you're all set !</p>

      <form onSubmit={submitHandler} className='flex flex-col gap-5'>
      <label className="w-full">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  New Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="password"
                  name="password"
                  value={password}
                  onChange={changeHandler}
                  placeholder="Enter password"
                  className="form-style w-full text-black"
                />
                </label>
                <button type='submit' className='bg-yellow-50 w-full'>Reset Password</button>
      </form>
      </div>)
     }
    </div>
  )
}

export default ResetPassword

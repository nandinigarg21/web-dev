import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sendResetPasswordLink } from '../../services/operations/authApis'


const ForgotPassword = () => {

  const dispatch = useDispatch()

  const [emailSent, setEmailSent] = useState(false)
  const [formData,setFormData] = useState({
    email:""
  })
  const {email} = formData


  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  const submitHandler = (e) => {
    e.preventDefault()


    const userData = {
      ...formData
    }

    console.log(userData)

    dispatch(sendResetPasswordLink(email,setEmailSent))

    setFormData({
      email:""
    })




  }



  return (
    <div className=' flex m-40 justify-center'>
      {
        !emailSent ? (<div className='flex flex-col gap-5 w-[50%]'>
          <p>Reset Your Password</p>
          <p>Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery</p>
          <form onSubmit={submitHandler} className='flex flex-col gap-5'>
            <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              value={email}
              onChange={changeHandler}
              placeholder="Enter email address"
              className="form-style w-full text-black"
            />
            </label>
            <button type='submit' className='bg-yellow-50 w-full'>Submit</button>
          </form>
          <Link to={"/login"}><p>Back to Login</p></Link>
        </div>) : (<div className='flex flex-col gap-5 w-[50%]'>
            <p>Email sent successfully ! Check your Inbox</p>
            <p>{`we've sent an email regarding password reset to ${email}`} </p>
            <button className='bg-yellow-50 w-full' onClick={submitHandler}>Resend Email</button>
            <Link to={"/login"}><p>Back to Login</p></Link>
        </div>)
      }
    </div>
  )
}

export default ForgotPassword

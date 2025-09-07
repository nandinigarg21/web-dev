import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../../services/operations/authApis'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { sendOtp } from '../../services/operations/authApis'


const VerifyEmail = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state)=>state.user)
    const [formData, setFormData] = useState({newOtp:"" })
  
    const { newOtp } = formData

    console.log(user)
  
    const changeHandler = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }


    console.log(formData.newOtp)
  
  
    const submitHandler = (e) => {
      e.preventDefault()

       dispatch(signUp(user.accountType,user.firstName,user.lastName,user.email,user.password,formData.newOtp,navigate))
  
        setFormData({
             newOtp:""
        })
      }

  return (
    <div className='flex flex-col justify-center mt-20 mb-20 w-[100%] gap-5'>
        <p> Verify Email</p>
        <p>`verification code had been sent to ${user.email}`</p>
      <form onSubmit={submitHandler} className='flex flex-col gap-5'>
         <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                One Time Password <sup className="text-pink-200">*</sup>
              </p>
          <input
            required
            type="number"
            name="newOtp"
            value={newOtp}
            step={1}
            placeholder='enter otp...'
            onChange={changeHandler}
            maxLength={6}
            className="form-style w-full text-black"
          />
              {/* <OtpInput 
                  required
                  name="newOtp"
                  value={newOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  onChange={changeHandler}
                  className="form-style w-full text-black"
              /> */}
        </label>
        <button type='submit' className='bg-yellow-50 w-full'>Submit</button>
      </form>
      <div className='flex w-full justify-between'><p>Back to Sign Up</p><button onClick={() => dispatch(sendOtp(user.email))}>Resend OTP</button></div>
    </div>
  )
}

export default VerifyEmail

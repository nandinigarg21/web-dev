
import { toast } from "react-hot-toast"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { contactUs, logIn, sendOtp } from "../../services/operations/authApis"
import { setUser } from "../../store/slices/userSlice"





const Form = ({ formType, button, children, text, }) => {

  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    accountType: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    message: ""
  })

  const { accountType, firstName, lastName, email, password, message } = formData

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }


  const submitHandler = (e) => {
    e.preventDefault()

    if (button === "Sign Up") {
      if (password.length < 8) {
        toast.error("Password must be atleast 8 char")
        return
      }

      const user = {
        ...formData,
        accountType
      }

      dispatch(setUser(user))

      dispatch(sendOtp(formData.email,navigate))

      setFormData({
        accountType: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        message: ""
      })
    }

    if (button === "Log In") {

      if (password.length < 8) {
        toast.error("Password must be atleast 8 char")
        return
      }
      
      const user = {
        ...formData
      }

      console.log(user)

      dispatch(logIn(formData.email,formData.password,navigate))

      setFormData({
        accountType: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        message: ""

      })

    }

    if (button === "Send Message") {
      

      const user = {
        ...formData
      }

      console.log(user)

      dispatch(contactUs(formData.email,formData.message,navigate))

      setFormData({
        accountType: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        message: ""

      })
    }
  }


  return ( (<div className='flex flex-col gap-5'>

        <p>{text}</p>
  
        <p>{children}</p>
  
        <form onSubmit={submitHandler} className=" flex flex-col gap-5">
  
          {formType === "signup" ? (<div className="flex flex-col gap-5">
  
            <div className="flex">
              <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Student <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="radio"
                  name="accountType"
                  value="Student"
                  onChange={changeHandler}
                  className="form-style w-full text-black"
                />
              </label>
  
              <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Instructor <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="radio"
                  name="accountType"
                  value="Instructor"
                  onChange={changeHandler}
                  className="form-style w-full text-black"
                />
              </label>
            </div>
  
  
            <div>
              <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  First Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={changeHandler}
                  placeholder="Enter first name"
                  className="form-style w-full text-black"
                />
              </label>
  
              <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Last Name <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={changeHandler}
                  placeholder="Enter last name"
                  className="form-style w-full text-black"
                />
              </label>
            </div>
  
          </div>) : (<div></div>)}
  
          <div>
  
            <label className="w-full">
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
            {
              formType === "contactus" ? (<div>
                <label className="w-full">
                  <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    message <sup className="text-pink-200">*</sup>
                  </p>
                  <textarea
                    required
                    rows="10"
                    name="message"
                    value={message}
                    onChange={changeHandler}
                    placeholder="Enter message"
                    className="form-style w-full text-black row-"
                  />
                </label>
              </div>) : (
                <label className="w-full">
                  <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                    Password <sup className="text-pink-200">*</sup>
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
                  <div className="w-full flex justify-end text-[0.75rem]">{formType==="login"?(<Link to={"/forgot-password"}><p>Forgot Password ?</p></Link>):(<div></div>)}</div>
                </label>
              )
            }
          </div>
  
          <button type="submit" className="bg-yellow-50">
            {button}
          </button>
  
        </form>
      </div>)
   )

}

export default Form

import { toast } from "react-hot-toast"
import { setUser } from "../../store/slices/userSlice"
import { apiConnector } from "../apiConnector"
import { authEndPoints } from "../apis"
import { setToken } from "../../store/slices/authSlice"
import {setLoading} from "../../store/slices/loadingSlice"




const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  SENDRESETPASSWORDLINK_API,
  RESETPASSWORD_API,
  CONTACT_API,
} = authEndPoints

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {

      const response = await apiConnector("POST", SENDOTP_API, { email })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      
      toast.success("OTP Sent Successfully")

      navigate("/verify-email")
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false))
  }
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  newOtp,
  navigate
) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        newOtp,
      })

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")

      

      navigate("/login")

    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    dispatch(setLoading(false))
  }
}

export function logIn(email, password, navigate) {
  
  return async (dispatch) => {

    dispatch(setLoading(true))
    
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")

      dispatch(setToken(response.data.token))

      dispatch(setUser(response.data.existingUser))


      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.existingUser))

      navigate("/dashboard")

    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed due to invalid credentials")
    }
    dispatch(setLoading(false))
  }
}

export function sendResetPasswordLink(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDRESETPASSWORDLINK_API, {
        email,
      })

      console.log("RESETPASSTOKEN RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Reset Email Sent")
      setEmailSent(true)
    } catch (error) {
      console.log("RESETPASSTOKEN ERROR............", error)
      toast.error("Failed To Send Reset Email")
    }
    dispatch(setLoading(false))
  }
}

export function resetPassword(password, token, setResetDone, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        token,
      })

      console.log("RESETPASSWORD RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Password Reset Successfully")
      setResetDone(true)

      navigate("/login")

    } catch (error) {
      console.log("RESETPASSWORD ERROR............", error)
      toast.error("Failed To Reset Password")
    }
    dispatch(setLoading(false))
  }
}

export function logOut(navigate) {
  return (dispatch) => {
    
    dispatch(setToken(null))
    dispatch(setUser(null))

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    toast.success("Logged Out")
    
    navigate("/")
  }
}


export function contactUs(email, message,navigate) {
  return async (dispatch) => {

    dispatch(setLoading(true))
    
    try {

      const response = await apiConnector("POST", CONTACT_API, { email ,message})
      console.log("Contact API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      
      toast.success("connection successfull")

      navigate("/contact")
    } catch (error) {
      console.log("contact API ERROR............", error)
      toast.error("connection unsuccessfull")
    }
    dispatch(setLoading(false))
  }
}

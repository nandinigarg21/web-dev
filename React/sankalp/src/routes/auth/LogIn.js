import React from 'react'
import Form from "../../components/common/Form"
import loginImage from "../../assets/Images/login.webp"
import Highlight from '../../components/common/Highlight'

const LogIn = () => {
  return (
    <div className='flex m-20 justify-between'>

        <div>
           <Form
              text={"Welcome Back"}
              button={"Log In"}
              formType={"login"}
              >
                 Build skills for today, tomorrow, and beyond. <br></br>{<Highlight>Education to future-proof your career.</Highlight>}
              </Form>
        </div>

        <div>
           <img src={loginImage} alt='log-in-image'/>
        </div>
      
    </div>
  )
}

export default LogIn

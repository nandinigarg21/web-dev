import React from 'react'
import signupImage from "../../assets/Images/signup.webp"
import Form from '../../components/common/Form'
import Highlight from '../../components/common/Highlight'


const SignUp = () => {


  return (
    <div className='flex justify-between m-20 '>
      
      <div>
         <img src={signupImage} alt="sign-up-image"/>
      </div>

      <div>
          <Form 
              text={"Join the millions learning to code with StudyNotion for free"}
              button={"Sign Up"}
              formType={"signup"}
            >
               Build skills for today, tomorrow, and beyond. <br></br>  <Highlight>Education to future-proof your career.</Highlight>
            </Form>
      </div>

    </div>
  )
}

export default SignUp

import React from 'react'
import Form from '../common/Form'

const ContactForm = () => {
  return (
    <div>
       <Form
          text={"Got a Idea? We've got the skills. Let's team up"}
          button={"Send Message"}
          formType={"contactus"}
       >
          Tell us more about yourself and what you're got in mind.
       </Form>
    </div>
  )
}

export default ContactForm

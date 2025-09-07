import React from 'react'
import ContactBlock from '../../components/contact/ContactBlock'
import ContactForm from '../../components/contact/ContactForm'

const Contact = () => {
  return (
    <div className='flex justify-around m-10'>

       <div><ContactBlock/></div>
    
       <div><ContactForm/></div>

    </div>
  )
}

export default Contact

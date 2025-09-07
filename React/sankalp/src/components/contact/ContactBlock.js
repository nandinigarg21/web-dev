import React from 'react'
import { SlSocialGoogle } from "react-icons/sl";

const contactData = [
    {
        icon:<SlSocialGoogle/>,
        heading:"chat with us",
        description:"our team is here to help",
        contact:"info@sankalp.com"
    },
    {
        icon:<SlSocialGoogle/>,
        heading:"chat with us",
        description:"our team is here to help",
        contact:"info@sankalp.com"
    },
    {
        icon:<SlSocialGoogle/>,
        heading:"chat with us",
        description:"our team is here to help",
        contact:"info@sankalp.com"
    },
]

const ContactBlock = () => {
  return (
    <div className='gap-5'>
      {contactData.map((element,index)=>{
        return (
            <div key={index}>
                <div  className='flex'>
                    <div>{element.icon}</div>
                    <div>{element.heading}</div>
                </div>
                <div>{element.description}</div>
                <div>{element.contact}</div>
            </div>
        )
      })}
    </div>
  )
}

export default ContactBlock

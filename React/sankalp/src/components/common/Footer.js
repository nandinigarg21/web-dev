import React from 'react'
import { FooterLink1, FooterLink2 } from '../../data/footer-links'
import { Link } from 'react-router-dom'
import FooterLogo from "../../assets/Logo/Logo-Full-Light.png"
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";



const Footer = () => {


  return (
    <div className='bg-richblack-700'>

      <div className='flex justify-between m-10'>

        <div className='flex flex-col justify-around items-center w-[50%]' >

          <div><img src={FooterLogo} alt='footer-logo' /></div>

          <div className='flex gap-5'>
            {
              FooterLink1.map((element, index) => {
                return (
                  <div key={index}>
                    <div>{element.title}</div>
                    <div>{
                      element.links.map((e, index) => {
                        return (
                          <div key={index}><Link to={e.link}>{e.title}</Link></div>
                        )
                      })
                    }</div>
                  </div>
                )
              })
            }
          </div>

          <div className='flex gap-1'>
          <TiSocialFacebookCircular />
          <SlSocialYoutube />
          <SlSocialGoogle />
          <TiSocialTwitter />
          </div>

        </div>


        <div className='flex justify-around w-[50%] m-10'>
          {
            FooterLink2.map((element, index) => {
              return (
                <div key={index}>
                  <div>{element.title}</div>
                  <div>{
                    element.links.map((e, index) => {
                      return (
                        <div key={index}><Link to={e.link}>{e.title}</Link></div>
                      )
                    })
                  }</div>
                </div>
              )
            })
          }
        </div>

      </div>



      <div className='flex justify-around m-10'>

        <div className='flex'>
          <p><Link to={"/privacy-policy"}>Privacy Policy</Link></p>
          <p><Link to={"/cookie-policy"}>Cookie Policy</Link></p>
          <p><Link to={"/terms"}>Terms</Link></p>
        </div>

        <div><p>Made with Love @2024 Sankalp</p></div>

      </div>

    </div>
  )
}

export default Footer

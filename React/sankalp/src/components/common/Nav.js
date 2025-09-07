
import Logo from "../../assets/Logo/Logo-Small-Light.png"
import { IoIosArrowDown } from "react-icons/io";
import Button from './Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { useEffect } from "react";
import { apiConnector } from "../../services/apiConnector";
import { categoryEndPoints } from "../../services/apis";
import { MdMenu } from "react-icons/md";
import Sidebar from "./Sidebar";
import { setCategory } from "../../store/slices/categorySlice";








const Nav = () => {

  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.user)
  const { totalItems } = useSelector((state) => state.cart)

  const {category} = useSelector((state)=>state.category)

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {

      try {
        const res = await apiConnector("GET", categoryEndPoints.SHOWCATEGORY_API)
        dispatch(setCategory(res.data.allCategory))
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }

    })()
  }, [])

  return (
    <div>
      <div className='flex items-center justify-between m-5'>

        <div className='flex items-center w-[10%] justify-evenly'>
          <Link to={"/"}><img src={Logo} alt='logo' /></Link>
          <Link to={"/"}><p>Sankalp</p></Link>

        </div>

        <div className='flex w-[30%] justify-evenly'>
          <Link to={"/"}> <div className={`${useLocation().pathname === '/' ? "text-yellow-50" : "text-white"}`}><p>Home</p></div></Link>

          <div className='group'>
            <div className='flex items-center'>
              <p>All Courses</p>
              <IoIosArrowDown />
            </div>
            <div className='hidden group-hover:block'>
              <div className='absolute h-5 w-5 bg-white rotate-45 translate-x-20' ></div>
              <div className='flex flex-col absolute h-max w-40 bg-white translate-y-2.5 text-black rounded-sm p-2.5 '>
                {
                  category.map((element, index) => (
                    <Link to={`/category/${element.name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`} key={index}>
                      <div key={index}>
                        {element.name}
                      </div></Link>
                  ))
                }
              </div>
            </div>
          </div>

          <Link to={"/about"}><div className={`${useLocation().pathname === '/about' ? "text-yellow-50" : "text-white"}`}><p>About Us</p></div></Link>
          <Link to={"/contact"}><div className={`${useLocation().pathname === '/contact' ? "text-yellow-50" : "text-white"}`}><p>Contact Us</p></div></Link>
        </div>

        <div className='flex w-[15%] justify-evenly'>
          {token ? (<div className='flex  justify-evenly'>
            {user?.accountType !== "Instructor" ? (<div className="flex gap-5">
              <Link to={"/dashboard/cart"} className='flex'>
                <FaCartShopping />
                <p className="relative -translate-y-2.5">{totalItems}</p>
              </Link>
              <img className='h-5 w-5 rounded-full' src={user?.profileImage} alt={`profile-${user?.firstName}`} />
              <div className="group">
             <div className="group-hover:block"><MdMenu /></div> 
              <div className="hidden group-hover:block"><Sidebar /></div>
              </div>
            </div>) : (<div className="flex gap-5">
              <img className='h-5 w-5 rounded-full' src={user?.profileImage} alt={`profile-${user?.firstName}`} />
              <div className="group">
             <div className="group-hover:block"><MdMenu /></div> 
              <div className="hidden group-hover:block"><Sidebar /></div>
              </div>
            </div>)}
          </div>) : (<div className='flex  justify-evenly'>
            <Button active={false} linkTo="/login" text="Log In" />
            <Button active={false} linkTo="/signup" text="Sign Up" />
          </div>)}
        </div>


      </div>

      <div className='h-0.5 bg-white'></div>
    </div>
  )
}

export default Nav




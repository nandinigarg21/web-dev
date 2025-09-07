import React from 'react'
import { studentSidebar, instructorSidebar } from '../../data/dashboard-links'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../services/operations/authApis'
import { useDispatch } from 'react-redux'


const Sidebar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.user)

    return (
        <div className={` flex flex-col absolute h-screen w-[15%]  bg-richblack-900 right-0 -translate-y-10 gap-5 items-center `}>

            <div className='flex flex-col gap-2.5 items-center'>
                <img src={user?.profileImage} alt={`profile-${user?.profileImage}`} className='h-40 w-40 mt-5'/>
                <p>{`Hello ${user?.firstName}`}</p>
            </div>
               
             <div>
            {
                user?.accountType === "Instructor" ? (<div className='flex flex-col gap-2 '>
                    {
                        instructorSidebar.map((e,index) => (
                            <Link to={e.path} key={e.id}>
                                <div key={index}>
                                    {e.name}
                                </div>
                            </Link>
                        ))
                    }
                </div>) : (<div className='flex flex-col gap-2 m-5'>
                    {
                        studentSidebar.map((e,index) => (
                            <Link to={e.path} key={index} >
                                <div key={e.id}>
                                    {e.name}
                                </div>
                            </Link>
                        ))
                    }
                </div>)

                
            }
            
            </div>

            <button onClick={()=>{dispatch(logOut(navigate))}}>Log Out</button>
        </div>
    )
}

export default Sidebar

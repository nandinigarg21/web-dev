import React from 'react'
import { TiEdit } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Profile = () => {

    const {user} = useSelector((state)=>state.user)

  return (
    <div className='flex flex-col gap-20 m-10 items-center h-screen'>
      <p className='font-bold'>My Profile</p>

      <div className='flex justify-between items-center w-[50%]'>
        <div className='flex gap-2.5'>
            <img src={user?.profileImage} alt={`profile-${user?.profileImage}`} className='w-20 rounded-full'/>
            <div className='flex flex-col justify-center'>
                <p>{`${user?.firstName} ${user?.lastName}`}</p>
                <p>{user?.email}</p>
            </div> 
        </div>
        <Link to={"/dashboard/my-profile/edit-profile"}>
        <div className='flex bg-yellow-50 items-center gap-1 p-1 rounded-md'>
          <TiEdit/>
          <p>Edit</p>
        </div>
        </Link>
      </div>

      <div className='flex flex-col gap-2.5 w-[50%]'>

        <div className='flex justify-between'>
            <p className='font-bold'>Personal Details</p>
            <Link to={"/dashboard/my-profile/edit-profile"}>
        <div className='flex bg-yellow-50 items-center gap-1 p-1 rounded-md'>
          <TiEdit/>
          <p>Edit</p>
        </div>
        </Link>
        </div>

        <div className='flex gap-10'>
           <div className='flex flex-col gap-2.5 w-[50%]'>
            <div>
                <p>First Name</p>
                <p>{user?.firstName}</p>
            </div>
            <div>
                <p>Email</p>
                <p>{user?.email}</p>
            </div>
            <div>
                <p>gender</p>
                {(user?.additionalDetails?.gender) ? (<p>{user?.additionalDetails?.gender}</p>) : (<p>Add</p>)}
            </div>
           </div>

           <div className='flex flex-col gap-2.5  w-[50%]'>
           <div>
                <p>Last Name</p>
                <p>{user?.lastName}</p>
            </div>
            <div>
                <p>Phone No.</p>
                <p>{(user?.additionalDetails?.contactNumber) ? (<p>{user?.additionalDetails?.contactNumber}</p>) : (<p>Add</p>)}</p>
            </div>
            <div>
                <p>Date of Birth</p>
                {(user?.additionalDetails?.dateOfBirth) ? (<p>{user?.additionalDetails?.dateOfBirth}</p>) : (<p>Add</p>)}
            </div>
           </div>

            
        </div>

      </div>

    </div>
  )
}

export default Profile

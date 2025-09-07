import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdditionalDetails from '../../components/profile/AdditionalDetails'
import ChangePassword from '../../components/profile/ChangePassword'
import { MdDeleteForever } from "react-icons/md";
import { deleteProfile, updateDisplayPicture } from '../../services/operations/profileApis';
import {useNavigate} from 'react-router-dom'



const EditProfile = () => {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const [profileImage, setProfileImage] = useState(null)

  
    const changeHandler = (e) => {
      const file = e.target.files[0]
      console.log(file)
      if (file) {
        setProfileImage(file)
      }
    }

  
    const submitHandler = () => {
      try {
        console.log("uploading...")
        const formData = new FormData()
        formData.append("profileImage", profileImage)
        console.log("formdata", formData)
        dispatch(updateDisplayPicture(token, formData))
        console.log("uploaded")
      } catch (error) {
        console.log("ERROR MESSAGE - ", error.message)
      }
    }


  return (
    <div className='flex flex-col items-center min-h-screen  m-10 gap-10 w-full'>

        <p className='font-bold'>Edit Profile</p>

        <div className='flex w-[50%] gap-5 items-center'>
            <img src={user?.profileImage} alt={`profile-${user?.profileImage}`} className='h-20 w-20 rounded-full'/>
            <div className='flex flex-col gap-2.5'>
                <p>Change Profile Picture</p>
                <form onSubmit={submitHandler} className='flex flex-col gap-2.5'>
                    <label>
                        <input
                           type='file'
                           name="profileImage"
                           accept="image/png, image/gif, image/jpeg"
                           onChange={changeHandler}
                           className="form-style w-full"
                           />
                    </label>
                    <div className='flex gap-y-2.5 gap-2.5'>
                    <button type='submit' className='bg-yellow-50 p-1 rounded-md' >Update</button>
                    <button className='bg-yellow-50 p-1 rounded-md' >Remove</button>
                </div>
                </form>
            </div>
        </div>

        <div className='w-[50%] flex flex-col gap-2.5'>
            <p>Additiona Details</p>
            <AdditionalDetails/>
        </div>

        <div className='w-[50%] flex flex-col gap-2.5'>
            <p>Change Password</p>
            <ChangePassword/>
        </div>

        <div className='w-[50%] bg-pink-100 p-2.5'>
            <div className='flex items-center gap-2.5'>
                <MdDeleteForever />
                <p>Delete Account</p>
            </div>
            <p>Do you want to Delete your Account ?</p>
            <p>This account contains paid courses and relevent data. Deleting your account will remove all the content assosiated with it.</p>
            <button className='text-pink-900 italic' onClick={()=>{dispatch(deleteProfile(token,navigate))}}>I want to delete my account.</button>
        </div>
             

        <div></div>
      
    </div>
  )
}

export default EditProfile

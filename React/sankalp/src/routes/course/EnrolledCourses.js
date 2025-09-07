import React from 'react'
import { useSelector } from 'react-redux'
import { Circle } from 'rc-progress';
import { CiMenuKebab } from "react-icons/ci";

const EnrolledCourses = () => {

    const { user } = useSelector((state) => state.user)

    return (
        <div className='flex flex-col items-center min-h-screen  m-10 gap-10 w-full '>

            <div className='grid grid-cols-6 w-[75%] bg-richblack-500'>
                <div className='col-span-3'>Course Name</div>
                <div className='col-span-1'>Duration</div>
                <div className='col-span-2'>Progress</div>
            </div>

            <div>
                {
                    user?.courses.map((e, index) => (
                        <div className='grid grid-cols-6 w-[75%] bg-richblack-500'>
                            <div className='col-span-3'>
                                <img src={user?.courses?.thumbnailImage} alt={`profile-${user?.courses?.thumbnailImage}`}/>
                                <div><p>{user?.courses?.courseName}</p><p>{user?.courses?.courseDescription}</p></div>
                            </div>
                            <div className='col-span-1'>{user?.courses?.courseDuration}</div>
                            <div className='col-span-2'><Circle percent={user?.courses?.courseProgress} strokeWidth={1} strokeColor="#D3D3D3" /> <CiMenuKebab /></div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default EnrolledCourses

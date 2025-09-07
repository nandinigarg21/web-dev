import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CiMenuKebab } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllCourses } from '../../services/operations/courseApis';



const MyCourses = () => {

    const dispatch = useDispatch()

    const {myCourses} = useSelector((state)=>state.course)

   useEffect(()=>{

    dispatch(getAllCourses())

   },[])


    const deleteHandler = () => {

    }

    const editHandler = () => {
        
    }

  return (
    <div className='min-h-screen m-10 flex flex-col gap-5'>

        <div className='flex justify-between'>
            <p>My Courses</p>
            <Link to={"/dashboard/my-course/create-course"}><button>New</button></Link>
        </div>

        <div className='grid grid-cols-9'>
            <div className='col-span-6'>Courses</div>
            <div className='col-span-1'>Duration</div>
            <div className='col-span-1'>Price</div>
            <div className='col-span-1'>Actions</div>
        </div>

        <div className='flex flex-col gap-5'>
            {
                myCourses.map((e,index)=>(
                    <div key={index} className='grid grid-cols-9'>
                        <div className='col-span-6 flex gap-5'>
                            <img src={e.thumbnailImage} alt={`image-${e.thumbnailImage}`} className='w-20 h-20'/>
                            <div>
                                <p>{e.courseName}</p>
                                <p>{e.courseDescription}</p>
                                <p>{`created: ${e.courseCreatedAt}`}</p>
                            </div>

                        </div>
                        <div className='col-span-1'>{e.courseDuration}</div>
                        <div className='col-span-1'>{e.price}</div>
                        <div className='col-span-1 group'><CiMenuKebab /> 
                           <div className='flex flex-col gap-2.5 p-1 absolute invisible bg-white text-black items-center justify-center group-hover:visible'>
                            <button onClick={deleteHandler}>Delete</button>
                            <button onClick={editHandler}>Edit</button>
                           </div>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default MyCourses

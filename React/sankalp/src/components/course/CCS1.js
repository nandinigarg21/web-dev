import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { setStep } from '../../store/slices/stepSlice'
import { useState } from 'react'
// import { setCourseData,setCourseImage } from '../../store/slices/courseSlice'
import { setCategory } from '../../store/slices/categorySlice'
import { useEffect } from 'react'
import { apiConnector } from '../../services/apiConnector'
import { categoryEndPoints } from '../../services/apis'
import { addCourseDetails } from '../../services/operations/courseApis'


const CCS1 = () => {

    const {category} = useSelector((state)=>state.category)
    const {token} = useSelector((state)=>state.auth)

    const dispatch = useDispatch()

    const [requirementList,setRequirementList] = useState([])

  
    const [formData, setFormData] = useState({
       courseName:"",
       courseDescription:"",
       coursePrice:"",
       courseCategory:"",
       whatWillYouLearn:"",
       courseRequirements:""
    })

    const [thumbnailImage,setThumbnailImage] = useState(null)
  
    const { courseName,courseDescription,coursePrice,courseCategory,whatWillYouLearn,courseRequirements } = formData
  
    const changeHandler = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
      
    }

    const imageHandler = (e) => {
        const file = e.target.files[0]
        if(file){
          setThumbnailImage(file)
        }
    }
    
    const submitHandler = (e) => {
      e.preventDefault()

        // console.log(courseThumbnail)
        // console.log(formData)
        // console.log(requirementList)
        
        // dispatch(setStep(2))
        // dispatch(setCourseData([formData,requirementList]))
        // dispatch(setCourseImage(courseThumbnail))

        // dispatch(addCourseDetails({formData,thumbnailImage},token))

         try {
        
        const courseData = new FormData()
        courseData.append("thumbnailImage", thumbnailImage)
        courseData.append("courseName",formData.courseName)
        courseData.append("courseDescription",formData.courseDescription)
        courseData.append("coursePrice",formData.coursePrice)
        courseData.append("whatWillYouLearn",formData.whatWillYouLearn)

        dispatch(addCourseDetails(courseData,token))

      } catch (error) {
        console.log("ERROR MESSAGE - ", error.message)
      }
        
  
      }
    
     useEffect(() => {
        (async () => {
    
          try {
            const res = await apiConnector("GET", categoryEndPoints.SHOWCATEGORY_API)
            console.log(res)
            setCategory(res.data.allCategory)
          } catch (error) {
            console.log("Could not fetch Categories.", error)
          }
    
        })()
      }, [])  


  return (
    <div className='w-full'>
       <form onSubmit={submitHandler} className='flex flex-col gap-2.5 '>
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Course Name</p>
              <input
                 required
                 type='text'
                 name="courseName"
                 value={courseName}
                 placeholder='enter course name'
                 onChange={changeHandler}
                 className='form-style w-full text-black'/>
            </label>

            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Course description</p>
              <textarea
                 required
                 rows={5}
                 name="courseDescription"
                 value={courseDescription}
                 placeholder='enter course description'
                 onChange={changeHandler}
                 className='form-style w-full text-black'/>
            </label>

            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Price</p>
              <input
                 required
                 type='text'
                 name="coursePrice"
                 value={coursePrice}
                 placeholder='enter course cost'
                 onChange={changeHandler}
                 className='form-style w-full text-black'/>
            </label>

            <label>
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Choose Category</p>
                <select
                    required
                    name='courseCategory'
                    value={courseCategory}
                    onChange={changeHandler}
                    className='form-style w-full text-black'
                    >
                        {
                            category.map((e,index)=>(
                                <option key={index} className='form-style w-full text-black'>{e.name}</option>
                            ))
                        }
                    </select>
            </label>

            <label>
                <p>Course Thumbnail</p>
                <input
                           type='file'
                           name="courseThumbnail"
                           accept="image/png, image/gif, image/jpeg"
                           onChange={imageHandler}
                           className="form-style w-full"
                           />
            </label>

            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Benifits of Course</p>
              <textarea
                 required
                 rows={5}
                 name="whatWillYouLearn"
                 value={whatWillYouLearn}
                 placeholder='enter benifits'
                 onChange={changeHandler}
                 className='form-style w-full text-black'/>
            </label>

            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Requirements</p>
             <div className='flex'>
             <input
                 type='text'
                 name="courseRequirements"
                 value={courseRequirements}
                 placeholder='enter requirements'
                 onChange={changeHandler}
                 className='form-style w-full text-black'/>
               <div onClick={(e) => {
        setRequirementList([...requirementList,formData.courseRequirements])
        setFormData({...formData,courseRequirements:""})
      }}>Add</div>
             </div>
               <div>
                {
                    requirementList.map((e,index)=>(
                        <div key={index} className='text-white flex justify-between '>
                          <p>{e}</p>
                          <div onClick={()=>{requirementList.splice([index],1)}}>Remove</div>
                        </div>
                    ))
                }
               </div>
            </label>

            <button type='submit' >Next</button>
          </form>
    </div>
  )
}


export default CCS1

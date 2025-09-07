import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { createSubSection } from '../../services/operations/courseApis'
import { useDispatch } from 'react-redux'


const SubSection = () => { 

  const dispatch = useDispatch()

  const {token} = useSelector((state)=>state.auth)

  const {sectionData} = useSelector((state)=>state.course)

    const [subSectionlist,setSubSectionList] = useState([])

    const [subSectionData,setSubSectionData] = useState({
      subSection:""
    })

    const [video,setVideo] = useState(null)

    const { subSection } = subSectionData

    const changeHandler = (e) => {
      setSubSectionData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
      
    }

    const videoHandler = (e) => {
       const video = e.target.files[0]
       if(video){
        setVideo(video)
       }
      
    }

    const addSubSectionHandler = (e) => {
      e.preventDefault()

        const data = new FormData()


        // console.log(video)
        // console.log(sectionData._id)
        // console.log(subSectionData.subSection)

        
        data.append("sectionId",sectionData._id)
        data.append("title",subSectionData.subSection)
        data.append("video",video)

        dispatch(createSubSection(data,token))
      
        setSubSectionList([...subSectionlist,subSectionData.subSection])
        setSubSectionData({...subSectionData,subSection:""})
      
    }


 

  return (
    <div>

 
        <label>
          <p>add sub section</p>
          <input 
                required
                type='text'
                name="subSection"
                value={subSection}
                placeholder='enter sub section name'
                onChange={changeHandler}
                className='form-style w-full text-black'
             />
        </label>
        <label>
                <p>video</p>
                <input
                           type='file'
                           name="video"
                          //  accept="image/png, image/gif, image/jpeg"
                           onChange={videoHandler}
                           className="form-style w-full"
                           />
            </label>
        <button onClick={addSubSectionHandler}> add section</button>
  

      <div className='bg-black flex flex-col justify-center items-center'>
        {
          subSectionlist.map((e,index)=>(
           <div key={index}>
             <p>{e}</p>
           </div>
          ))
        }
      </div>
      

    </div>
  )
}

export default SubSection

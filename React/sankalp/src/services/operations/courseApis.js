import {toast} from "react-hot-toast"
import {apiConnector} from "../apiConnector"
import {courseEndPoints} from "../apis"
import {  setCourseData, setMyCourses, setSectionData } from "../../store/slices/courseSlice"
import { setLoading } from "../../store/slices/loadingSlice"
import { setStep } from "../../store/slices/stepSlice"

const {
    COURSE_DETAILS_API,
    GET_ALL_COURSE_API,
    CREATE_COURSE_API,
    EDIT_COURSE_API,
    CREATE_SECTION_API,
    CREATE_SUBSECTION_API,
    UPDATE_SECTION_API,
    UPDATE_SUBSECTION_API,
    DELETE_SECTION_API,
    DELETE_SUBSECTION_API,
    GET_USER_ENROLLED_COURSES_API,
    GET_ALL_INSTRUCTOR_COURSES_API,
    DELETE_COURSE_API,
    GET_FULL_COURSE_DETAILS_AUTHENTICATED,
    LECTURE_COMPLETION_API,
    PUBLISH_COURSE_API
  } = courseEndPoints
  

  export function publishCourse (token,data,navigate) {
    return async(dispatch) => {
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST",PUBLISH_COURSE_API,data,{
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })

        console.log("PUBLISH COURSE API RESPONSE............", response)
        
        if(!response?.data?.success){
          throw new Error("could not publish")
        }
        toast.success("course published successfully")

        navigate("dashboard/my-courses")

      } catch (error) {
        console.log("PUBLISH COURSE API ERROR............", error)
        toast.error(error.message)
        
      }
      dispatch(setLoading(false))

    }

  }

  export function getAllCourses () {
    return async (dispatch)  => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("GET", GET_ALL_COURSE_API)
      
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Course Categories")
      }
      dispatch(setMyCourses(response?.data?.allCourses))
    } catch (error) {
      console.log("GET_ALL_COURSE_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }
}
  
  export const fetchCourseDetails = async (courseId) => {
    const toastId = toast.loading("Loading...")
    //   dispatch(setLoading(true));
    let result = null
    try {
      const response = await apiConnector("POST", COURSE_DETAILS_API, {
        courseId,
      })
      console.log("COURSE_DETAILS_API API RESPONSE............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data
    } catch (error) {
      console.log("COURSE_DETAILS_API API ERROR............", error)
      result = error.response.data
      // toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    //   dispatch(setLoading(false));
    return result
  }
  
  // fetching the available course categories
  // export const fetchCourseCategories = async () => {
  //   let result = []
  //   try {
  //     const response = await apiConnector("GET", COURSE_CATEGORIES_API)
  //     console.log("COURSE_CATEGORIES_API API RESPONSE............", response)
  //     if (!response?.data?.success) {
  //       throw new Error("Could Not Fetch Course Categories")
  //     }
  //     result = response?.data?.data
  //   } catch (error) {
  //     console.log("COURSE_CATEGORY_API API ERROR............", error)
  //     toast.error(error.message)
  //   }
  //   return result
  // }
  
  // add the course details
  export function addCourseDetails  (courseData, token)  {
    return async(dispatch) => {
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", CREATE_COURSE_API, courseData, {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })
        console.log("CREATE COURSE API RESPONSE............", response)
        if (!response?.data?.success) {
          throw new Error("Could Not Add Course Details")
        }
        toast.success("Course Details Added Successfully")
        dispatch(setCourseData(response?.data?.newCourse))
        dispatch(setStep(2))
      } catch (error) {
        console.log("CREATE COURSE API ERROR............", error)
        toast.error(error.message)
      }
      dispatch(setLoading(false))
    }
  }
  
  // edit the course details
  export const editCourseDetails = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", EDIT_COURSE_API, data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })
      console.log("EDIT COURSE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Update Course Details")
      }
      toast.success("Course Details Updated Successfully")
      result = response?.data?.data
    } catch (error) {
      console.log("EDIT COURSE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }
  
  // create a section
  export function createSection  (data, token)  {
    return async (dispatch) => {
      // dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", CREATE_SECTION_API, data, {
          Authorization: `Bearer ${token}`,
        })
        console.log("CREATE SECTION API RESPONSE............", response)
        if (!response?.data?.success) {
          throw new Error("Could Not Create Section")
        }
        toast.success("Course Section Created")
        dispatch(setSectionData(response?.data?.newSection))
        
      } catch (error) {
        console.log("CREATE SECTION API ERROR............", error)
        toast.error(error.message)
      }
      // dispatch(setLoading(false))
    }

  }
  
  // create a subsection
  export function createSubSection  (data, token)  {

    return async () => {
      try {
        const response = await apiConnector("POST", CREATE_SUBSECTION_API, data, {
          Authorization: `Bearer ${token}`,
        })
        console.log("CREATE SUB-SECTION API RESPONSE............", response)
        if (!response?.data?.success) {
          throw new Error("Could Not Add Lecture")
        }
        toast.success("Lecture Added")
      } catch (error) {
        console.log("CREATE SUB-SECTION API ERROR............", error)
        toast.error(error.message)
      }
    }
  }
  
  // update a section
  export const updateSection = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", UPDATE_SECTION_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE SECTION API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Update Section")
      }
      toast.success("Course Section Updated")
      result = response?.data?.data
    } catch (error) {
      console.log("UPDATE SECTION API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }
  
  // update a subsection
  export const updateSubSection = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", UPDATE_SUBSECTION_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE SUB-SECTION API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Update Lecture")
      }
      toast.success("Lecture Updated")
      result = response?.data?.data
    } catch (error) {
      console.log("UPDATE SUB-SECTION API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }
  
  // delete a section
  export const deleteSection = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", DELETE_SECTION_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE SECTION API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete Section")
      }
      toast.success("Course Section Deleted")
      result = response?.data?.data
    } catch (error) {
      console.log("DELETE SECTION API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }
  // delete a subsection
  export const deleteSubSection = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", DELETE_SUBSECTION_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE SUB-SECTION API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete Lecture")
      }
      toast.success("Lecture Deleted")
      result = response?.data?.data
    } catch (error) {
      console.log("DELETE SUB-SECTION API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }
  
  // fetching all courses under a specific instructor
  export const fetchInstructorCourses = async (token) => {
    let result = []
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector(
        "GET",
        GET_ALL_INSTRUCTOR_COURSES_API,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      )
      console.log("INSTRUCTOR COURSES API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Instructor Courses")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("INSTRUCTOR COURSES API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }
  
  // delete a course
  export const deleteCourse = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", DELETE_COURSE_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE COURSE API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Delete Course")
      }
      toast.success("Course Deleted")
    } catch (error) {
      console.log("DELETE COURSE API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
  }
  
  // get full details of a course
  export const getFullDetailsOfCourse = async (courseId, token) => {
    const toastId = toast.loading("Loading...")
    //   dispatch(setLoading(true));
    let result = null
    try {
      const response = await apiConnector(
        "POST",
        GET_FULL_COURSE_DETAILS_AUTHENTICATED,
        {
          courseId,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      )
      console.log("COURSE_FULL_DETAILS_API API RESPONSE............", response)
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response?.data?.data
    } catch (error) {
      console.log("COURSE_FULL_DETAILS_API API ERROR............", error)
      result = error.response.data
      // toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    //   dispatch(setLoading(false));
    return result
  }
  
  // mark a lecture as complete
  export const markLectureAsComplete = async (data, token) => {
    let result = null
    console.log("mark complete data", data)
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", LECTURE_COMPLETION_API, data, {
        Authorization: `Bearer ${token}`,
      })
      console.log(
        "MARK_LECTURE_AS_COMPLETE_API API RESPONSE............",
        response
      )
  
      if (!response.data.message) {
        throw new Error(response.data.error)
      }
      toast.success("Lecture Completed")
      result = true
    } catch (error) {
      console.log("MARK_LECTURE_AS_COMPLETE_API API ERROR............", error)
      toast.error(error.message)
      result = false
    }
    toast.dismiss(toastId)
    return result
  }
  

  

export async function getUserEnrolledCourses(token) {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector(
        "GET",
        GET_USER_ENROLLED_COURSES_API,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      )
      // console.log(
      //   "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
      //   response
      // )
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data
    } catch (error) {
      console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
      toast.error("Could Not Get Enrolled Courses")
    }
    toast.dismiss(toastId)
    return result
  }
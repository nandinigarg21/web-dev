const BASE_URL = "http://localhost:4000/api/v1"

export const authEndPoints = {
  SENDOTP_API: BASE_URL + "/auth/send-otp",
  SIGNUP_API: BASE_URL + "/auth/sign-up",
  LOGIN_API: BASE_URL + "/auth/log-in",
  SENDRESETPASSWORDLINK_API: BASE_URL + "/auth/forgot-password/token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  CONTACT_API : BASE_URL + "/auth/contact"
}


export const categoryEndPoints = {
    SHOWCATEGORY_API : BASE_URL + "/category/showAllCategories",
    CATEGORYPAGEDATA_API: BASE_URL + "/category/getCategoryPageDetails",
}

export const profileEndPoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/additionalDetails/changeProfileImage",
  UPDATE_PROFILE_API: BASE_URL + "/additionalDetails/updateAdditionalDetails",
  CHANGE_PASSWORD_API: BASE_URL + "/additionalDetails/change-password",
  DELETE_PROFILE_API: BASE_URL + "/additionalDetails/deleteAccount",
}


export const courseEndPoints = {
  PUBLISH_COURSE_API : BASE_URL + "/course/publishCourse",
  GET_ALL_COURSE_API: BASE_URL + "/course/showAllCourses",
  COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
  EDIT_COURSE_API: BASE_URL + "/course/editCourse",
  CREATE_COURSE_API: BASE_URL + "/course/createCourse",
  CREATE_SECTION_API: BASE_URL + "/section/createSection",
  CREATE_SUBSECTION_API: BASE_URL + "/subSection/createSubSection",
  UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/course/getEnrolledCourses",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
  DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
  DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED: BASE_URL + "/course/getFullCourseDetails",
  LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress",
 
}

export const ratingsEndPoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/getReviews",
  CREATE_RATING_API: BASE_URL + "/course/createRating",
}
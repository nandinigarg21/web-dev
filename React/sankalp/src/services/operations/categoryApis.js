
import { apiConnector } from "../apiConnector"
import { categoryEndPoints } from "../apis"
import toast from "react-hot-toast"

const {
    SHOWCATEGORY_API,
    CATEGORYPAGEDATA_API
} = categoryEndPoints


// add create categoty

export function showAllCategories () {
    return async () => {
        try {
           const response = await apiConnector("GET", SHOWCATEGORY_API)
           console.log("showing category responce...",response)
           console.log(response.data.success)



      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      
        } catch (error) {
            console.log("SENDOTP API ERROR............", error)
        }
    }

}


export const getCategoryPageData = async (categoryId) => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector( "POST", CATEGORYPAGEDATA_API,
        {
          categoryId: categoryId,
        }
      )
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Catagory page data.")
      }
      result = response?.data
    } catch (error) {
      console.log("CATALOGPAGEDATA_API API ERROR............", error)
      toast.error(error.message)
      result = error.response?.data
    }
    toast.dismiss(toastId)
    return result
  }
  
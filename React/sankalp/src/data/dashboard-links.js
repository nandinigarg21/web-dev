

export const instructorSidebar = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard",
    type: "Instructor",
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: "Instructor",
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/my-course/create-course",
    type: "Instructor",
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Settings",
    path: "/dashboard/my-profile/edit-profile",
    icon: "VscAccount",
  },
  
 
]


export const studentSidebar = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
   {
    id: 2,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: "Student",
    icon: "VscMortarBoard",
  },
  {
    id: 3,
    name: "Cart",
    path: "/dashboard/cart",
    type: "Student",
    icon: "VscArchive",
  },
  {
    id: 5,
    name: "Settings",
    path: "/dashboard/my-profile/edit-profile",
    icon: "VscAccount",
  }
]
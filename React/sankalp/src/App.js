import { Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import Nav from "./components/common/Nav";
import Home from "./routes/homepage/Home";
import About from "./routes/homepage/About";
import Contact from "./routes/auth/Contact";
import Footer from "./components/common/Footer";
import LogIn from "./routes/auth/LogIn";
import SignUp from "./routes/auth/SignUp";
import ForgotPassword from "./routes/auth/ForgotPassword";
import VerifyEmail from "./routes/auth/VerifyEmail";
import ResetPassword from "./routes/auth/ResetPassword";
import Dashboard from "./routes/dashboard/Dashboard";
import Error from "./routes/homepage/Error";
import Cart from "./routes/dashboard/Cart";
import Profile from "./routes/profile/Profile";
import EditProfile from "./routes/profile/EditProfile";
import EnrolledCourses from "./routes/course/EnrolledCourses";
import MyCourses from "./routes/course/MyCourses";
import CreateCourse from "./routes/course/CreateCourse";



function App() {

  const {loading} = useSelector((state)=>state.loading)

  return (
    <div>

      {/* add open and close routes respectively */}

       <Nav/>

      {
        loading ? (<div className="flex h-screen w-screen justify-center items-center"><BeatLoader/></div>) : (
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/verify-email" element={<VerifyEmail/>}/>
  
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/forgot-password/:id" element={<ResetPassword/>}/>
          
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/dashboard/my-profile" element={<Profile/>}/>
          <Route path="/dashboard/my-profile/edit-profile" element={<EditProfile/>}/>
          <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses/>}/>
          <Route path="/dashboard/cart" element={<Cart/>}/>
          <Route path="/dashboard/my-courses" element={<MyCourses/>}/>
          <Route path="/dashboard/my-course/create-course" element={<CreateCourse/>}/>
          
  
          <Route path="*" element={<Error/>}/>
         </Routes>
        )
      }

       <Footer/>
    </div>
  );
}

export default App;

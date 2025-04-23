import React, { useContext } from "react";
import Blogs from "./Components/Blogs"
import Header from "./Components/Header"
import Pagination from "./Components/Pagination"
import { useEffect } from "react";
import { AppContext } from "./Context/AppContext";



  


function App() {

  const {fetchBlogsPosts} = useContext(AppContext);
  

  useEffect( () =>{
    fetchBlogsPosts();
  },[])

  
  return (
    <div> 
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;

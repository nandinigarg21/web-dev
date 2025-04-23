import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data.js"

import Cards from "./components/Cards";
import NavBar from "./components/NavBar"
import Filter from "./components/Filter.js";




function App() {
  
  const [courses, setCourses] = useState(null)

  useEffect( () => {
    const fetchData = async() =>{
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // console.log(data)

        setCourses(output.data)
      }
      catch(error){

      }
    }
    fetchData();
  },[])
  return (
    <div>
      <NavBar/>

      <filter 
      filterData = {filterData}
      />

      <Cards
      courses = {courses}/>
    </div>
  );
}

export default App;

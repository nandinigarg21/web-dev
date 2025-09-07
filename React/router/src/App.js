import {NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nothing from "./components/Nothing";
import Main from "./components/Main";

function App() {

  const navigate = useNavigate();

  function clickHandler(){
    navigate("/home")
  }

  
  return (
    <div>
      <div>
    <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/About">About</NavLink></li>
      <li onClick={clickHandler}><NavLink to="*">dont click here</NavLink></li>
    </ul>
  </nav>
  </div>
      <Routes>
        <Route path="/" element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<Nothing/>}/>
        </Route>
    
        
      </Routes>
    </div>
  );
}

export default App;

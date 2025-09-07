
import { useContext } from "react";
import Content from "./components/Content";
import  AppContext from "./context/context";

function App() {
   
  return (
<div>
  <h1>our fetchBlogs</h1>

  <Content/>

  <div>
    <button >prev</button>
    <button >next</button>
    <p></p>
  </div>

  
</div>
  );
}

export default App;

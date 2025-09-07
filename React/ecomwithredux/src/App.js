import Nav from "./components/Nav";
import Cards from "./routes/Cards";
import Carts from "./routes/Carts";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
   <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/Cart" element={<Carts/>}/>
      </Routes>
      
   </div>
  );
}

export default App;

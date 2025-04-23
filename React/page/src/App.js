
import reviews from "./data";
import Testimonial from "./Components/Testimonial";
function App() {
  return (
    <div className="flex flex-col w-[100vw] justify-center items-center min-h-screen bg-gray-200">
        <div className=" text-center">
          <h1 className="text-4xl font-bold">Our Testimonial</h1>
          <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
          <Testimonial reviews = {reviews}/>
        </div>
    </div>
  );
}

export default App;

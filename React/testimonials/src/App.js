import reviews from "./data";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <h1>our Testimonials</h1>
      <Testimonial reviews = {reviews[index]}></Testimonial>
    </div>
  );
}

export default App;

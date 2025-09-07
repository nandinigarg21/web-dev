import React, { useState } from 'react'
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

const Testimonial = (props) => {
    let review = props.review;
    const [index,setIndex] = useState("0");
    function leftHandler ()  {
           if(index=-1){
            setIndex(n-1);
           }
           else{
            setIndex(index-1)
           }
    }
  return (
    <div>
      <img src={review.image} alt=''></img>
      <p>{review.name}</p>
      <p>{review.job}</p>
      <FaQuoteLeft></FaQuoteLeft>
      <p>{review.text}</p>
      <FaQuoteRight></FaQuoteRight>
      <button onClick={leftHandler}>-</button>
      <button onClick={rightHandler}>+</button>
      <button onClick={surpriseHandler}>surprise </button>
    </div>
  )
}

export default Testimonial

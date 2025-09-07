import React from 'react'
import { useDispatch } from 'react-redux';

const Cart = (product) => {
   
  const dispatch = useDispatch();

  const remove = () => {
      dispatch(remove(product.id));
  }
  
    
  return (
    <div>
      <div><img src={product.image} alt=''></img></div>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <button onClick={remove}>remove</button>
    </div>
  )
}

export default Cart

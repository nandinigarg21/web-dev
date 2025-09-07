import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Card = (product) => {
    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();

    const add = () => {
        dispatch(add(product));
    }
    const remove = () => {
        dispatch(remove(product.id));
    }
  return (
    <div>
      <div>{product.title}</div>
      <div>{product.description}</div>
      <img src={product.image} alt=''></img>
      <div>{product.title}</div>
      <div>{product.price}</div>

      <button>{
           cart.Some((p)=>p.id===product.id) ? <button onClick={remove}>remove from cart</button> : <button onClick={add}>Add to cart</button>
        }</button>
    </div>
  )
}
 
export default Card

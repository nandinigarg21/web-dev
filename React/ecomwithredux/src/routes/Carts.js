import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cart from "../components/Cart"

const Carts = () => {
  const {cart} = useSelector((state)=>state)
  const {totalAmount,setTotalAmount} = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
  })
  return (
    <div>
       <div>
       {
        cart.length === 0 ? (<div>
          <p>yout cart is empty</p>
          <button><Link to="/">shop now</Link> </button>
        </div>) : (<div>
      {
        cart.map((product)=>{
          return <Cart key={product.id} product={product}/>
        })
      }
        </div>)
      }
       </div>

       <div>
          <div>summary</div>
          <div>total products : {cart.length} </div>
          <div>total amount : {totalAmount}</div>
          <button>checkOut</button>
       </div>
    </div>
  )
}

export default Carts

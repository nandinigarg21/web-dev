import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItems from '../Components/CartItems'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [amount, setAmount] = useState(0);

  useEffect( () =>{
    setAmount( cart.reduce( (acc, curr) => acc + curr.price, 0));
  }, [cart])
  return (
    <div className='mb-10'>
      {
        cart.length > 0 ? 
        (<div className='flex flex-row justify-center max-[1300px] mx-auto gap-x-5'>
          <div className='w-[60%] flex flex-col p-2 '>
            {
              cart.map( (item,index) => {
                return <CartItems key={item.id} item={item} itemIndex={index}/>

              })
            }
          </div>

          <div className='w-[40%] mt-5 flex flex-col'>
            <div className='flex flex-col h-[100%] justify-between p-5 gap-5 my-14'>
             <div className='flex flex-col gap-5'>
               <div className='font-semibold text-xl text-green-800 '>
              Your Cart
              </div>
            <div className='font-semibold text-5xl text-green-700 -mt-5'>
              Summary
              </div>
            <p className='text-xl'>
              <span className='text-gray-700 font-semibold text-xl'>
                Total Items: {cart.length}
                </span>
            </p>
          </div>
          </div>

          <div className='flex flex-col'>
            <p className='text-xl font-bold'>
              <span className='text-gray-700 font-semibold'>
                Total Amount:
              </span>{" "}
              ${amount}
              </p>


            <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transitio duration -300 ease-linear mt-5 border-2 bprder-green-600 font-bold hover:text-green-700 p-3 text-xl mr-10'>
              CheckOut Now
            </button>
          </div>
          </div>
        </div>
        ) :(
        <div className='min-h-[80vh] flex flex-col justify-center items-center'>
          <h1 className='text-gray-700 font-semibold text-xl mb-2'>
            Your cart is empty!
            </h1>
          <Link to={"/"}>
          <button className='uppercase bg-green-600 p-3 px-10 rounded-lg text-white 
          mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all
          ease-in hover:text-green-600 border-2 border-green-600'>
            Shop Now
            </button>
            </Link>
        </div>)
      }
      
    </div>
  )
}

export default Cart

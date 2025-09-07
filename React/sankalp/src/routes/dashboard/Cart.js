import React from 'react'
import { useSelector } from "react-redux"

const Cart = () => {

  const { cart, total, totalItems } = useSelector((state) => state.cart)


  return (
    <div className='min-h-screen'>

      <p>My Wishlist...</p>

      <div>
        <p>{`${totalItems} courses in cart`}</p>
        <div className='h-0.5 bg-white w-full'></div>
      </div>

      <div>
        {
           cart.map((e,index)=>(
            <div>
              <div>
                <img src={e.thubnailImage} alt={`profile-${e.thubnailImage}`}/>
                <div>
                  <p>{e.courseName}</p>
                  <p>{e.coursesDescription}</p>
                  <div>
                    <p>{e.avgRating}</p>
                    {/* rating icons */}
                  </div>
                  <p>{`${e.totalLectures}-${e.totalDuration}-${e.difficulty}`}</p>
                </div>
                
              </div>
            </div>
           ))
        }
      </div>

      <div>
        <p>Total :</p>
        <p>{`Rs. ${total}`}</p>
        <button>Button</button>
      </div>

    </div>
  )
}

export default Cart



import React from 'react'
import Card from './Card'
import "./product.css"
const Product = () => {

    const response = [
        {
          itemName:"Nirma",
          itemDate:"20",
          itemMonth:"june",
          itemyear:"1999"
        },
        {
          itemName:"Surf-Excel",
          itemDate:"22",
          itemMonth:"july",
          itemyear:"2000"
        },
        {
          itemName:"Tide",
          itemDate:"24",
          itemMonth:"august",
          itemyear:"2001"
        },
       
      ]
  return (
    <div className='product'>

   
   <Card itemName={response[0].itemName} day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear} />

   <Card itemName={response[1].itemName} day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear} />

   <Card itemName={response[2].itemName} day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear} />

   
   
   
    </div>
    
    
  )
}

export default Product

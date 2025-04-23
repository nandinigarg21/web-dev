import { useState } from 'react';
import './Item.css'

function Item({itemName}){

 return(
   <div>
 <p className="nirma">{itemName}</p>
    {/* {props.children} */}
    </div>
 );
}

export default Item;
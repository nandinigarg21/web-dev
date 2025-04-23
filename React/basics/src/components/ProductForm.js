import { useState } from "react";
import "./Productform.css";

function Productform() {

  const [formData,setFormData] = useState({
    itemName:"",
    itemDate:""
  })

  const {itemName,itemDate} = formData

  const changeHandler = (e) => {
    // console.log(formData)
    setFormData((prevData)=>({
           ...prevData,
           [e.target.name]:e.target.value

    }))
  }
  // const [itemName, setItemName] = useState("");
  // const [itemDate, setItemDate] = useState("");

  // function ItemNamechangeHandler(event) {
  //   setItemName(event.target.value);
    
  // }
  // function dateChangeHandler(event) {
  //   setItemDate(event.target.value);
    
  // }

  function submitHandler(event) {
    event.preventDefault();

    console.log(formData)

    // const ProductData = {
    //   itemName: itemName,
    //   itemDate: itemDate,
    // };
    // console.log(ProductData);
    // setItemName("");
    // setItemDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="NEwProduct-item">
        <label>First Name</label>
        <input
          type="text"
          name="itemName"
          value={itemName}
          onChange={changeHandler}
        ></input>
      </div>

      <div className="NewProduct-date">
        <label>Date</label>
        <input
          type="date"
          name="itemDate"
          value={itemDate}
          onChange={changeHandler}
          min="2023-01-09"
          max="2025-12-12"
        ></input>
      </div>
      <div className="NewProdct-button">
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
}

export default Productform;

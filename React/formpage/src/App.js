import React from "react"
import { useState } from "react"

function App() {

  const [formData, setFormData] = useState( {firstName: "", lastName: "", email: "",
      country:"india", streetAddress:"",city:"" ,
      state:"", postalCode:false,comments:"", candidates:false, offers:false, PushNotification:""});
   console.log(formData);


  function changeHandler(e) { 
   const {name, value, checked, type} = e.target
   setFormData( (prev) => ({...prev, [name]: type === "checkbox" ? checked: value}))
    
  }

  function submitHandler(e){
    e.preventDefault();

    console.log("finally printing the data")
    console.log(formData)
  }

  return (
    <div className="flex  flex-col items-center">

      <form onSubmit={submitHandler}>

      <label htmlFor="firstName"> First name</label>
      <br></br>
        <input
        type="text"
        placeholder="first name"
        onChange={changeHandler}
        name="firstName"
        id="firstName"
        value={formData.firstName}
        className="outline"

        />


        <br/>
        <br></br>

        <label htmlFor="lastName"> Last name</label>
      <br></br>

        <input 
        type="text"
        placeholder="last name"
        onChange={changeHandler}
        name="lastName"
        id="lastName"
        value={formData.lastName}
        className="outline"
        />

        <br/>
        <br></br>

        <label htmlFor="email"> Email</label>
      <br></br>

        <input  
        type="text"
        placeholder=" Enter your email"
        onChange={changeHandler}
        name="email"
        value={formData.email}
        className="outline"
        />

        <br/>
        <br></br>

        <label htmlFor="country">Country</label>

        <br></br>

        <select 
        id="country"
        name="country"
        onChange={changeHandler}
        value={formData.country}
        className="outline"
        
        >
          <option>India</option>
          <option>US</option>
          <option>Canada</option>
          <option>Maxico</option>
        </select>

     
        <br></br>
        <br></br>

        <label htmlFor="streetAddress">streetAddress</label>
        <br></br>

        <input
        type="text"
        onChange={changeHandler}
        name="streetAddress"
        id="streetAddress"
        placeholder="B-25C"
        checked ={formData.streetAddress}
        className="outline"
        />
       

       <br/>
       <br></br>

       <label htmlFor="city">City</label>
        <br></br>

        <input
        type="text"
        onChange={changeHandler}
        name="city"
        id="city"
        placeholder="Gwalior"
        checked ={formData.city}
        className="outline"
        />

        
       <br/>
       <br></br>

       <label htmlFor="state">State</label>
        <br></br>

        <input
        type="text"
        onChange={changeHandler}
        name="state"
        id="state"
        placeholder="MP"
        checked ={formData.state}
        className="outline"
        />

<br/>
       <br></br>

       <label htmlFor="postalCode">postalCode</label>
        <br></br>

        <input
        type="text"
        onChange={changeHandler}
        name="postalCode"
        id="postalCode"
        placeholder="110935"
        checked ={formData.postalCode}
        className="outline"
        />

        <br></br>
        <br></br>

        <fieldset>

          <legend>By Email</legend>
         <div className="flex">
          <input
          id="comments"
          name="comments"
          type="checkBox"
          checked={formData.comments}
          onChange={changeHandler}
          />
          <div>
            <label htmlFor="comments">Coments</label>
            <p>Get notified when someone</p>
          </div>
          </div>

          <div className="flex">
          <input
          id="candidates"
          name="candidates"
          type="checkBox"
          checked={formData.candidates}
          onChange={changeHandler}
          />
          <div>
            <label htmlFor="candidates">candidates</label>
            <p>Get notified when someone</p>
          </div>
          </div>

          <div className="flex">
          <input
          id="offers"
          name="offers"
          type="checkBox"
          checked={formData.offers}
          onChange={changeHandler}
          />
          <div>
            <label htmlFor="offers">offers</label>
            <p>Get notified when someone</p>
          </div>
          </div>

          <br></br>
          <br></br>
        
        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>Get notified when someone</p>

          <input
          type="radio"
          name="pushNotification"
          id="pushEverything"
          value="everything"
          onChange={changeHandler}
          />

          <label htmlFor="pushEverything">Everything</label>
          <br></br>

          <input
          type="radio"
          name="pushNotification"
          id="pushEmail"
          value="Save as email"
          onChange={changeHandler}
          />

          <label htmlFor="pushEmail">Save as email</label>
          <br></br>

          <input
          type="radio"
          name="pushNotification"
          id="pushNothing"
          value="No Push Notification"
          onChange={changeHandler}
          />

          
          <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>

        <button 
        className="bg-blue-600 text-white font-bold rounded py-2 px-4"
        >Save</button>

    
    

       

       




      </form>
    
    </div>
  );
}

export default App;

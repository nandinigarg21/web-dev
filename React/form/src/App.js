
import { useState } from "react";


function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" , isVisible:false, mode:""});
  
  function changeHandler(event) {
    const {name,value,type,checked} = event.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]:type==="checkBox"? checked:value
      }
    })
  }

  function submitHandler(event){
    event.preventDefaullt();
    console.log(formData);
  }
  
 return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="firstName" onChange={changeHandler} value={formData.firstName}></input>
        <input type="text" name="lastName" onChange={changeHandler} value={formData.lastName}></input>
        <label htmlFor="isVisible">is Visible ?</label>
        <input type="checkbox" name="isVisible" id="isVisible" onChange={changeHandler} checked={formData.isVisible}></input>
        <input type="radio" name="mode" id="mode" value="online" onChange={changeHandler} checked={formData.mode==="online"}></input>
        <input type="radio" name="mode" id="mode" value="ofline" onChange={changeHandler} checked={formData.mode==="ofline"}></input>
        <button type="submit">submit</button>
      </form>

    </div>
  );
}

export default App;

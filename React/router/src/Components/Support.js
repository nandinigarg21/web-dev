import React from 'react'
import { clickHandler, useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate();
    function clickHandler() {
        navigate("/labs")
    }

    function backHandler() {
        navigate(-1);
    }
  return (<div>
    <div>
      this is support page
    </div>
    <button onClick={clickHandler}>Move to labs page</button>
    <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Support

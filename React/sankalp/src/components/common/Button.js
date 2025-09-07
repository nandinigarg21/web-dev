import { Link } from "react-router-dom"

const Button = ({active,text,linkTo}) => {
  return (
    <div className={`${active ? "bg-yellow-50" : "bg-richblack-900"} m-2.5 w-max`} >
        <Link to={linkTo}><button>{text}</button></Link>
    </div>
  )
}

export default Button

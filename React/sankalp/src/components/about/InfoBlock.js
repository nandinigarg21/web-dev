import React from 'react'

const InfoBlock = ({active,heading,description}) => {
  return (
    <div className={`${active ? "bg-richblack-600":"bg-richblack-700"}`}>
      <div><p>{heading}</p></div>
      <div><p>{description}</p></div>
    </div>
  )
}

export default InfoBlock

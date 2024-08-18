import React from 'react'
import { Link } from 'react-router-dom'

const Successpayment = () => {
  return (
    <div>
      <div> 
        <h1>Thank You</h1> 
        <p>Order Placed Successfully</p> 
        <Link to="/"> 
        <span>Another Shopping</span> 
        </Link> 
        </div>
    </div>
  )
}

export default Successpayment

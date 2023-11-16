import React from 'react'
import './card.css'

const Card = ({id,image,product,price}) => {
  return (
    <div className="card">
    <img src={image}></img>
    <p>product: {product} </p>
    <p> price: {price} $</p>
  </div>
  )
}

export default Card
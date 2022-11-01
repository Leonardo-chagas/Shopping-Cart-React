import React from 'react'
import Button from './Button'

const Product = ({product}) => {
  return (
    <div>
      <img src={product.image}></img>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>{product.price}</h4>
      <Button></Button>
    </div>
  )
}

export default product

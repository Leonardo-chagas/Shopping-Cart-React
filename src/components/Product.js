import React from 'react'
import Button from './Button'
import '../css/product.css'

const Product = ({product, color, text, onClick}) => {
  return (
    <div id='product-container'>
      <img src={product.image} alt="" width={40} height={40}/>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div>
        <h4>{product.price}</h4>
        <Button color={color} text={text} onClick={onClick}></Button>
      </div>
    </div>
  )
}

export default Product

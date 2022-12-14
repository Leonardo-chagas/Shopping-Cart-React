import React from 'react'
import Product from './Product.js'

const Products = ({products, color, text, onClick}) => {
  return (
    <div>
      {products.length > 0 ? products.map((product, index) => (
        <Product key={index} product={product} color={color} text={text} onClick={onClick}></Product>
      )) : 'Não existem produtos para mostrar'}
    </div>
  )
}

export default Products

import { useEffect } from 'react'
import Product from './Product'
import Products from './Products'
import Button from './Button'
import { useState } from 'react'

const ShoppingCart = (products, onClick) => {
  const [total, setTotal] = useState(0)

  /* products.array.forEach(product => {
    setTotal(total + product.price)
  }); */

  useEffect(() => {
    for(var i = 0; i < products.length; i++){
      setTotal(total + products[i].price)
    }
  }, [products]);

  const Buy = () => {
    alert(`Compra Realizada no valor de R$${total}`)
  }

  return (
    <div>
      <Products products={products} color={'red'} text={'Remover do Carrinho'} onClick={onClick}></Products>
      <h3>Valor Total: R$ {total}</h3>
      <Button color={'green'} text={'Realizar Compra'} onClick={Buy}></Button>
    </div>
  )
}

export default ShoppingCart

import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../css/header.css'

const Header = () => {
  const location = useLocation()
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Link id='link'
      style={{backgroundColor: location.pathname == '/' ? 'green' : 'red'}}
      to={location.pathname == '/' ? '/shoppingCart' : '/'}
       >{location.pathname == '/' ? 'Carrinho de Compras' : 'Voltar'}</Link>
    </header>
  )
}

export default Header

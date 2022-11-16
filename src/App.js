import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';
import './css/app.css'

function App() {
  const [shoppingCart, setShoppingCart] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const GetProducts = async () => {
      const productsFromServer = await FetchProducts()
      setProducts(productsFromServer)
    }

    GetProducts()
  }, [])

  const FetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  }

  const AddToShoppingCart = (product) => {
    setShoppingCart([...shoppingCart, product])
  }

  const RemoveFromShoppingCart = (id) => {
    setShoppingCart(shoppingCart.filter((product) => product.shoppingId !== id))
  }

  return (
    <Router>
      <div id="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Products products={products} color={'green'} text={'Adicionar ao carrinho'} onClick={AddToShoppingCart}></Products>}></Route>
          <Route path='/shoppingCart' element={<ShoppingCart products={shoppingCart} onClick={RemoveFromShoppingCart}></ShoppingCart>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

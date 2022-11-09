import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

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

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Products products={products}></Products>}></Route>
          <Route path='/shoppingCart' element={<ShoppingCart></ShoppingCart>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

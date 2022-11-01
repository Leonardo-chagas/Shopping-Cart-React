import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useState} from 'react'
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [shoppingCart, setShoppingCart] = useState([])

  const AddToShoppingCart = (product) => {
    setShoppingCart([...shoppingCart, product])
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Products></Products>}></Route>
          <Route path='/shoppingCart' element={<ShoppingCart></ShoppingCart>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

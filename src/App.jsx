import { HashRouter, Routes, Route  } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import CartShow from './pages/CartShow'
import { useState } from 'react'

function App() {
 
  const [ allProducts, setAllProducts ] = useState([]);

  return (
    <>
      <HashRouter>
        <Navbar 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/carrito' element={<CartShow />}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App

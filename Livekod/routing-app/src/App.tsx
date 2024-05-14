import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home name={ 'Jesper' } /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/products/:id" element={ <SingleProduct /> } />
      </Routes>
    </div>
  )
}

export default App

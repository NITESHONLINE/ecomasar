import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import ProductView from './pages/ProductView'
import UseEffect from './pages/UseEffect'
import EditProduct from './pages/EditProduct'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductView />} />
        <Route path='/useeffect' element={<UseEffect />} />
        <Route path='/edit/:id' element={<EditProduct />} />
      </Routes>
    </>
  )
}

export default App

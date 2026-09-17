import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import ProductView from './pages/ProductView'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductView />} />
      </Routes>
    </>
  )
}

export default App

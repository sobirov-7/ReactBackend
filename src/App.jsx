import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Categories from './pages/Categories'
import AddProduct from './pages/AddProduct'

function App() {

  return (
    <>
    <Navbar/>
    <div className='BigBox'>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

import Navbar from './components/Navbar/Navbar'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verifys from './pages/Verifys/Verifys'
import MyOrders from './pages/MyOrders/MyOrders'



const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin= {setShowLogin} />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/cart' element ={<Cart />} />
          <Route path='/order' element ={<PlaceOrder />} />
          <Route path='/verify' element ={<Verifys />} />
          <Route path='/myorders' element ={<MyOrders />} />
          
  

        
      
      </Routes>
    </div>
    <Footer/>

    </>
    
  )
}

export default App






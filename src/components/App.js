import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import logo from '../assets/logo.png'
import Footer from './Footer'
import Header from './Header'
import CartDrawer from './CartDrawer'
import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import ContactPage from '../pages/ContactPage'
import CheckoutPage from '../pages/CheckoutPage'

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.amount, 0),
    [cart]
  )

  return (
    <div className='avr-app'>
      <Header
        logo={logo}
        onCartClick={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateCart={updateCart}
      />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/boutique' element={<ShopPage cart={cart} updateCart={updateCart} />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/commande' element={<CheckoutPage cart={cart} updateCart={updateCart} />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles'
import { App } from './routes/App'
import { CartProvider } from './context/cart/CartProvider'
import { UserProvider } from './context/user/UserProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <GlobalStyles />
        <App />
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
)

import { useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({ children }) => {
  const [cart, updateCart] = useState([])

  const addItem = (item, quantity) => {
    updateCart((prevCart) => [...prevCart, { ...item, quantity }])
  }

  const isInCart = (codeProduct) => {
    return cart.some((cadaItem) => cadaItem.cp === codeProduct)
  }

  const deleteItem = (codeProduct) => {
    updateCart((prevCart) => prevCart.filter((cadaItem) => cadaItem.cp !== codeProduct))
  }

  const removeCart = () => {
    updateCart([])
  }

  const totalQuantityItems = () => {
    return cart.reduce((acumulador, cadaItem) => acumulador + cadaItem.quantity, 0)
  }

  const totalPrice = () => {
    return cart.reduce((acumulador, cadaItem) => acumulador + cadaItem.price * cadaItem.quantity, 0)
  }

  const data = {
    cart,
    addItem,
    isInCart,
    deleteItem,
    removeCart,
    totalQuantityItems,
    totalPrice
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartProvider }

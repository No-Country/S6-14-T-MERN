import { useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({ children }) => {

  const newOrder = 
  {
    "user": [
      "63e45326671632015d9394ef"
  ],
  "products": {
      "name": "camiseta",
      "shortDescription": "Camiseta personalizada",
      "largeDescription": "Camiseta personalizada",
      "price": 1000,
      "imageUrl": "",
      "type": "algodon",
      "category": "63e471d4e3c2cc26f2250325"
  },
  "style": "1",
  "colorBase": "#ffffff",
  "colorSecond": "#000000",
  "backNumberColor": "#af2606",
  "backNumberStyle": "1",
  "players": {
      "name": "messi",
      "number": 10,
      "shirtSize": "M",
      "shortSize": "M",
      "withSockets": true,
      "isGoalkeeper": true
  },
  "shippingFullName": "Lio the goat Messi",
  "shippingEmail": "thegoat@gmail.com",
  "shippingPhone": "1010101010",
  "shippingAddress": "Parque de los principes",
  "comments": "anda pa ya bobo",
  "amount": 1,
  "priceAmount": 3000,
  "date": "2023-02-12T06:57:55.519Z",
  "status": "pending",
  "payment": {
      "paypalId": "125487964",
      "amount": 3000,
      "date": "2023-02-12T06:57:55.519Z",
      "meta": "paypal"
  }
  }
  

  const [cart, updateCart] = useState([newOrder])

  const addItem = (item, quantity) => {
    updateCart((prevCart) => [...prevCart, { ...item, quantity }])
  }
  
  const addOrder = (item) => {
    // console.log(item)
    updateCart((prevCart) => [...prevCart, { ...item }])
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
    totalPrice,
    addOrder
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartProvider }

import axios from 'axios'
import React, { Children, useContext, useState } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../context/cart/CartContext'
import { CartProvider } from '../../context/cart/CartProvider'
import { OrderContext } from '../../context/order/OrderContext'
import { Player } from './Player'
import { useNavigate } from 'react-router-dom'
import { set } from 'mongoose'
import instance from '../../services/axios'

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 89vw;
  height: 600px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;

  label {
    margin-bottom: 5px;
  }

  input,
  textarea {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%; /* ajusta el ancho al 100% del contenedor */
  }

  textarea {
    resize: vertical; /* permite al usuario cambiar la altura */
  }
`

const Titulo = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 5px;
`

const Submit = styled('button')`
  color: var(--text-two);
  border-radius: 3rem;
  background-color: var(--bg-component-one);
  margin: 0 auto;
  padding: 0.5rem 3rem;
`

const ShippingInfo = () => {
  const navigate = useNavigate()

  const order = {
    shippingFullName: '',
    shippingEmail: '',
    shippingPhone: 0,
    shippingAddress: '',
    comments: ''
  }

  const [inputs, setInputs] = useState(order)

  const context = useContext(CartContext)
  const cartContext = context.cart

  const { price } = useContext(OrderContext)
  const { total, shirts, pants, socks, totalQuantity } = price()

  const players = localStorage.getItem('players')

  const newPlayer = JSON.parse(players)
  const mapPlayer = newPlayer?.map((player) => {
    return player
  })

  const customData = localStorage.getItem('camisas')
  const newCustomData = JSON.parse(customData)

  // console.log(mapPlayer);

  const newPlayers = [
    {
      name: 'Sergio',
      number: 10,
      shirtSize: 'M',
      shortSize: 'M',
      withSockets: true,
      isGoalkeeper: false
    },
    {
      name: 'pablo',
      number: 10,
      shirtSize: 'M',
      shortSize: 'M',
      withSockets: true,
      isGoalkeeper: false
    }
  ]

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  cartContext[0].shippingFullName = inputs.shippingFullName
  cartContext[0].shippingEmail = inputs.shippingEmail
  cartContext[0].shippingAddress = inputs.shippingAddress
  cartContext[0].shippingPhone = inputs.shippingPhone
  cartContext[0].comments = inputs.comments
  cartContext[0].priceAmount = total
  cartContext[0].amount = totalQuantity
  cartContext[0].players = mapPlayer
  cartContext[0].style = newCustomData.ordenDeCompra.modelOption
  cartContext[0].colorBase = newCustomData.ordenDeCompra.base
  cartContext[0].colorSecond = newCustomData.ordenDeCompra.modelColor
  cartContext[0].backNumberColor = newCustomData.ordenDeCompra.numberColor
  cartContext[0].backNumberStyle = newCustomData.ordenDeCompra.numberOption

  // console.log("Cart", cartContext);

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      context.addOrder(inputs)

      const sendCart = await instance()
        .post('/orders', cartContext[0])
        .then((res) => {
          console.log(res.data)
          const orderId = res.data.data.newOrder._id
          console.log(orderId)
          navigate(`/payments?id=${orderId || '63fe4e441a449de0a7eec963'}`)
        })
    } catch (error) {
      console.log(error)
    };
  }

  return (
    <>
      {/* <input type="text"  name="shipping_full_name" value={inputs.shipping_full_name}  onChange={handleChange} /> */}

      <Formulario onSubmit={handleSubmit}>
        <Titulo>Datos de envio</Titulo>
        <label htmlFor='shippingFullName'>Nombre:</label>
        <input
          type='text'
          name='shippingFullName'
          value={inputs.shippingFullName}
          onChange={handleChange}
        />

        <label htmlFor='shippingEmail'>Email:</label>
        <input
          type='email'
          id='shippingEmail'
          name='shippingEmail'
          value={inputs.shippingEmail}
          onChange={handleChange}
        />

        <label htmlFor='shippingPhone'>Teléfono:</label>
        <input
          type='tel'
          id='shippingPhone'
          name='shippingPhone'
          value={inputs.shippingPhone}
          onChange={handleChange}
        />

        <label htmlFor='shippingAddress'>Dirección de envío:</label>
        <input
          type='text'
          id='shippingAddress'
          name='shippingAddress'
          value={inputs.shippingAddress}
          onChange={handleChange}
        />

        <label htmlFor='comments'>Comentarios:</label>
        <textarea
          id='comments'
          name='comments'
          rows='4'
          value={inputs.comments}
          onChange={handleChange}
        />

        <Submit type='submit'>Enviar orden</Submit>
      </Formulario>
    </>
  )
}

export { ShippingInfo }

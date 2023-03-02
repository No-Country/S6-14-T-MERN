import React from 'react'
import { PlayersSet, ShippingInfo, Steps } from '../../components/export'
import TotalCompra from '../../components/orders/TotalCompra'

const OrderPage = () => {
  return (
    <main>
      <TotalCompra />
      <PlayersSet />
      <ShippingInfo />
      <Steps two />
    </main>
  )
}

export { OrderPage }

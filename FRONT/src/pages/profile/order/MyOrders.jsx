import { useContext } from 'react'
import styled from 'styled-components'
import { Order } from './Order'
import { UserContext } from '../../../context/user/UserContext'
import { LinkStyled } from '../../../components/button/LinkStyled'

const SectionStyled = styled('section')`
  color: var(--text-two);
  background-color: var(--background-two);
  padding: clamp(3rem, 3vw, 6rem) clamp(1rem,5vw,10rem);
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
const Heading = styled('h2')`
  font-size: 1.75rem;
  font-weight: bold;
`
const WrapperOrders = styled('section')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(12.5rem, 100%, 31.25rem), 1fr));
  gap: 3rem;
`
const LinkBuy = styled(LinkStyled)`
  justify-self: center;
`
const MyOrders = () => {
  const { user } = useContext(UserContext)

  const orders = user.orders.map((order) => {
    const { _id, amount, colorBase, colorSecond, date, shippingFullName, shippingEmail, shippingAddress, shippingPhone, products, priceAmount, style, status } = order

    return <Order key={_id} id={_id} date={date} name={shippingFullName} email={shippingEmail} address={shippingAddress} phoneNumber={shippingPhone} products={products} model={style} baseColor={colorBase} secondColor={colorSecond} quantity={amount} total={priceAmount} status={status} />
  })

  return (
    <SectionStyled>
      <Heading>Mis ordenes</Heading>
      <WrapperOrders>
        {orders.length > 0 ? orders : <LinkBuy to='/diseñador'>Ir a comprar</LinkBuy>}
      </WrapperOrders>
    </SectionStyled>
  )
}

export { MyOrders }

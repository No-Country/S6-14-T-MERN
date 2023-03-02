import styled, { css } from 'styled-components'

const OrderStyled = styled('article')`
  display: flex;
  flex-flow: column nowrap;
  border-radius: 1rem;
  gap: 1rem;
  color: var(--text-one);
  background-color: var(--background-one);
  padding: 1rem;
`
const OrderLi = styled('li')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.125rem solid var(--bg-component-one);

  :nth-child(13) {
    border-bottom: none;
  }
`
const Heading = styled('h3')`
  font-size: 1rem;
`
const Span = styled('span')`
  font-weight: 300;
`
const Status = styled('span')`
  color: var(--text-one);
  border-radius: 1rem;
  background-color: #ff2121;
  padding: .25rem 1rem;

  ${({ success }) => success && css`
    color: var(--text-two);
    background-color: var(--bg-component-one);
  `}
`
const Order = (props) => {
  const { id, date, name, email, address, phoneNumber, products, model, baseColor, secondColor, quantity, total, status } = props

  return (
    <OrderStyled>
      <OrderLi>
        <Heading>NRO-ORDEN</Heading>
        <Span>{id}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>DATE</Heading>
        <Span>{date}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>NAME</Heading>
        <Span>{name}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>EMAIL</Heading>
        <Span>{email}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>ADDRESS</Heading>
        <Span>{address}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>PHONE NUMBER</Heading>
        <Span>{phoneNumber}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>PRODUCTS</Heading>
        <Span>{products?.length}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>MODEL</Heading>
        <Span>{model}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>BASE-COLOR</Heading>
        <Span>{baseColor}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>SECOND-COLOR</Heading>
        <Span>{secondColor}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>QUANTITY</Heading>
        <Span>{quantity}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>TOTAL</Heading>
        <Span>{total}</Span>
      </OrderLi>
      <OrderLi>
        <Heading>STATUS</Heading>
        <Status>{status?.toUpperCase()}</Status>
      </OrderLi>
    </OrderStyled>
  )
}

export { Order }

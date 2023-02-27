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

  :nth-child(11) {
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
const Order = () => {
  return (
    <OrderStyled>
      <OrderLi>
        <Heading>NRO-ORDEN</Heading>
        <Span>289NB2S</Span>
      </OrderLi>
      <OrderLi>
        <Heading>DATE</Heading>
        <Span>22-23-67 , 15:06HS</Span>
      </OrderLi>
      <OrderLi>
        <Heading>PRODUCTS</Heading>
        <Span>123</Span>
      </OrderLi>
      <OrderLi>
        <Heading>MODEL</Heading>
        <Span>PREMIUM 2023 SOFT</Span>
      </OrderLi>
      <OrderLi>
        <Heading>BASE-COLOR</Heading>
        <Span>PINK</Span>
      </OrderLi>
      <OrderLi>
        <Heading>SECOND-COLOR</Heading>
        <Span>RED</Span>
      </OrderLi>
      <OrderLi>
        <Heading>SHORTS</Heading>
        <Span>23</Span>
      </OrderLi>
      <OrderLi>
        <Heading>SOCKS</Heading>
        <Span>24</Span>
      </OrderLi>
      <OrderLi>
        <Heading>QUANTITY</Heading>
        <Span>51</Span>
      </OrderLi>
      <OrderLi>
        <Heading>TOTAL</Heading>
        <Span>$52,312</Span>
      </OrderLi>
      <OrderLi>
        <Heading>STATUS</Heading>
        <Status>PENDING</Status>
      </OrderLi>
    </OrderStyled>
  )
}

export { Order }

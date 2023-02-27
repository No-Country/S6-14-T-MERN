import styled from 'styled-components'
import { Order } from './Order'

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

const MyOrders = () => {
  return (
    <SectionStyled>
      <Heading>Mis ordenes</Heading>
      <WrapperOrders>
        <Order />
        <Order />
        <Order />
        <Order />
      </WrapperOrders>
    </SectionStyled>
  )
}

export { MyOrders }

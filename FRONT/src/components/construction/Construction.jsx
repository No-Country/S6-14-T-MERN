import styled from 'styled-components'
import { IconConstruction } from '../export'

const SectionStyled = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 1rem;

  & svg {
    width: clamp(7.5rem, 15vw, 30rem);
    height: clamp(7.5rem, 15vw, 30rem);
    fill: var(--text-one);
  }
`
const Heading = styled('h2')`
  font-size: clamp(1.75rem, 2vw, 4rem);
  font-weight: bold;
  text-align: center;
`
const Construction = () => {
  return (
    <SectionStyled>
      <IconConstruction />
      <Heading>En construcción...</Heading>
    </SectionStyled>
  )
}

export { Construction }

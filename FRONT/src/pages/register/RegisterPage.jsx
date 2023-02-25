import { SignUp } from './SignUp'
import styled from 'styled-components '

const SectionStyled = styled('section')`
  color: var(--text-two);
  background-color: var(--background-two);
  padding: clamp(3rem, 3vw, 6rem) clamp(1rem,5vw,10rem);
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
const Heading = styled('h2')`
  color: var(--text-two);
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
`
const RegisterPage = () => {
  return (
    <main>
      <SectionStyled>
        <Heading>Registrarse</Heading>
        <SignUp />
      </SectionStyled>
    </main>
  )
}

export { RegisterPage }

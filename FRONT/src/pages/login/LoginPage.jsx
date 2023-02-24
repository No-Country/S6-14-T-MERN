import styled from 'styled-components'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

const SectionStyled = styled('section')`
  color: var(--text-two);
  background-color: var(--background-two);
  padding: clamp(3rem, 3vw, 6rem) clamp(1rem,5vw,10rem);
  display: grid;
  grid-template: 
  "heading heading" auto
  "signin signup" auto
  / 1fr 1fr;
  gap: 3rem;
  
  @media screen and (max-width: 49.75rem) {
     grid-template: 
     "heading" auto
     "signin" auto
     "signup" auto
     / 1fr;
  }
`
const Heading = styled('h2')`
  color: var(--text-two);
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  grid-area: heading;
`
const LoginPage = () => {
  return (
    <main>
      <SectionStyled>
        <Heading>Iniciar sesión</Heading>
        <SignIn />
        <SignUp />
      </SectionStyled>
    </main>
  )
}

export { LoginPage }

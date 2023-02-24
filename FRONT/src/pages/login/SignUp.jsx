import styled from 'styled-components'
import { LinkStyled } from '../../components/export'

const WrapperSignUp = styled('div')`
  grid-area: signup;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`
const Heading = styled('h3')`
  font-size: 0.875rem;
`
const UlStyled = styled('ul')`
  font-size: 0.875rem;
  padding: 0.5rem 2rem;
`
const LiStyled = styled('li')`
  list-style-type: disc;
`
const SignUp = () => {
  return (
    <WrapperSignUp>
      <Heading>Crearse una cuenta tiene muchos beneficios</Heading>
      <UlStyled>
        <LiStyled>Guardar diseños</LiStyled>
        <LiStyled>Seguimiento de pedidos</LiStyled>
        <LiStyled>Accede a descuentos</LiStyled>
      </UlStyled>
      <LinkStyled to='/register'>Registrarse</LinkStyled>
    </WrapperSignUp>
  )
}

export { SignUp }

import styled from 'styled-components'
import { IconGoogle, IconFacebook } from '../../components/export'

const WrapperSignIn = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  grid-area: signin;
`
const FormStyled = styled('form')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`
const LabelStyled = styled('label')`
  font-size: 0.875rem;
  font-weight: bold;
`
const InputStyled = styled('input')`
  padding: .5rem;
  outline: none;
  border-radius: .5rem;
  background-color: #f0f0f0;
  width: 100%;
`
const Submit = styled('button')`
  align-self: center;
  border-radius: 3rem;
  background-color: var(--bg-component-one);
  padding: 0.5rem 3rem;
`
const Heading = styled('h3')`
  color: #006FCF;
  font-size: 0.875rem;
  text-align: center;
`
const WrapperSocialButtons = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`
const SignIn = () => {
  return (
    <WrapperSignIn>
      <FormStyled>
        <LabelStyled htmlFor='email'>Email</LabelStyled>
        <InputStyled id='email' name='email' type='email' placeholder='Email' required />
        <LabelStyled htmlFor='password'>Contraseña</LabelStyled>
        <InputStyled id='password' name='password' type='password' placeholder='Contraseña' required />
        <Submit type='submit'>Ingresar</Submit>
      </FormStyled>
      <Heading>Olvidaste tu contraseña?</Heading>
      <WrapperSocialButtons>
        <button>
          <IconGoogle />
        </button>
        <button>
          <IconFacebook />
        </button>
      </WrapperSocialButtons>
    </WrapperSignIn>
  )
}

export { SignIn }

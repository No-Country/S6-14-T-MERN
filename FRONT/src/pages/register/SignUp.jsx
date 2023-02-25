import styled from 'styled-components'
import { IconGoogle, IconFacebook } from '../../components/export'

const WrapperSignUp = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const WrapperSocialButtons = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`
const FormStyled = styled('form')`
  display: grid;
  grid-template: 
  "formleft formright" auto
  "submit submit" auto
  / 1fr 1fr;
  gap: clamp(1rem, 3vw, 6rem);
  
  @media screen and (max-width: 49.75rem) {
     grid-template: 
     "formleft" auto
     "formright" auto
     "submit" auto
     / 1fr;
  }
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
const WrapperFormLeft = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const WrapperFormRight = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Submit = styled('button')`
  grid-area: submit;
  justify-self: center;
  border-radius: 3rem;
  background-color: var(--bg-component-one);
  padding: 0.5rem 3rem;
`
const SignUp = () => {
  return (
    <WrapperSignUp>
      <WrapperSocialButtons>
        <button>
          <IconGoogle />
        </button>
        <button>
          <IconFacebook />
        </button>
      </WrapperSocialButtons>
      <FormStyled>
        <WrapperFormLeft>
          <LabelStyled htmlFor='user'>Usuario</LabelStyled>
          <InputStyled id='user' name='user' placeholder='Usuario' />
          <LabelStyled htmlFor='name'>Nombre</LabelStyled>
          <InputStyled id='name' name='name' placeholder='Nombre' />
          <LabelStyled htmlFor='lastName'>Apellido</LabelStyled>
          <InputStyled id='lastName' name='lastName' placeholder='Apellido' />
          <LabelStyled htmlFor='address'>Dirección</LabelStyled>
          <InputStyled id='address' placeholder='Dirección' />
        </WrapperFormLeft>
        <WrapperFormRight>
          <LabelStyled htmlFor='avatar'>Avatar</LabelStyled>
          <InputStyled type='file' id='avatar' name='avatar' placeholder='Avatar' accept='image/png, image/jpeg' />
          <LabelStyled htmlFor='email'>Email</LabelStyled>
          <InputStyled id='email' name='email' placeholder='Email' />
          <LabelStyled htmlFor='password'>Contraseña</LabelStyled>
          <InputStyled id='password' placeholder='Contraseña' />
          <LabelStyled htmlFor='confirmPassword'>Confirmar contraseña</LabelStyled>
          <InputStyled id='confirmPassword' name='confirmPassword' placeholder='Confirmar contraseña' />
        </WrapperFormRight>
        <Submit type='submit'>Registrarse</Submit>
      </FormStyled>
    </WrapperSignUp>
  )
}

export { SignUp }

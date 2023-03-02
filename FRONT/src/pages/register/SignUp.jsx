import { IconGoogle, IconFacebook } from '../../components/export'
import { UserContext } from '../../context/user/UserContext'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'

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
  const [formData, updateFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    address: '',
    avatar: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { updateUser, createUserToken, signUp, signUpWithGoogle } = useContext(UserContext)

  const handleOnInputChange = (ev) => {
    updateFormData((prevFormData) => {
      return {
        ...prevFormData,
        [ev.target.name]: ev.target.value
      }
    })
  }

  const handleOnFormSubmit = async (ev) => {
    try {
      ev.preventDefault()
      const response = await signUp(formData)
      updateUser(response.data.user)
      createUserToken(response.data.token)
      toast.success(`Bienvenido ${response.data.user.firstName}`)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <WrapperSignUp>
      <WrapperSocialButtons>
        <button onClick={signUpWithGoogle}>
          <IconGoogle />
        </button>
        <button>
          <IconFacebook />
        </button>
      </WrapperSocialButtons>
      <FormStyled onSubmit={handleOnFormSubmit}>
        <WrapperFormLeft>
          <LabelStyled htmlFor='username'>Usuario</LabelStyled>
          <InputStyled onChange={handleOnInputChange} value={formData.username} id='username' name='username' placeholder='Usuario' />
          <LabelStyled htmlFor='firstName'>Nombre</LabelStyled>
          <InputStyled onChange={handleOnInputChange} value={formData.firstName} id='firstName' name='firstName' placeholder='Nombre' required />
          <LabelStyled htmlFor='lastName'>Apellido</LabelStyled>
          <InputStyled onChange={handleOnInputChange} value={formData.lastName} id='lastName' name='lastName' placeholder='Apellido' required />
          <LabelStyled htmlFor='address'>Dirección</LabelStyled>
          <InputStyled
            onChange={handleOnInputChange} value={formData.address} id='address'
            name='address' placeholder='Dirección'
          />
        </WrapperFormLeft>
        <WrapperFormRight>
          <LabelStyled htmlFor='avatar'>Avatar</LabelStyled>
          <InputStyled onChange={handleOnInputChange} value={formData.avatar} type='file' id='avatar' name='avatar' placeholder='Avatar' accept='image/png, image/jpeg' />
          <LabelStyled htmlFor='email'>Email</LabelStyled>
          <InputStyled onChange={handleOnInputChange} value={formData.email} id='email' name='email' type='email' placeholder='Email' required />
          <LabelStyled htmlFor='password'>Contraseña</LabelStyled>
          <InputStyled onChange={handleOnInputChange} value={formData.password} id='password' name='password' type='password' placeholder='Contraseña' required />
          <LabelStyled htmlFor='confirmPassword'>Confirmar contraseña</LabelStyled>
          <InputStyled onChange={handleOnInputChange} value={formData.confirmPassword} id='confirmPassword' name='confirmPassword' placeholder='Confirmar contraseña' />
        </WrapperFormRight>
        <Submit type='submit'>Registrarse</Submit>
      </FormStyled>
    </WrapperSignUp>
  )
}

export { SignUp }

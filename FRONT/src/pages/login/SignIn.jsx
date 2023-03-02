import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import { IconGoogle, IconFacebook } from '../../components/export'
import { UserContext } from '../../context/user/UserContext'
import { SendRecoveryMail } from './SendRecoverMail'

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
  cursor: pointer;
`
const WrapperSocialButtons = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`
const SignIn = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, updateFormData] = useState({
    email: '',
    password: ''
  })

  const handleOnInputChange = (ev) => {
    updateFormData((prevFormData) => {
      return {
        ...prevFormData,
        [ev.target.name]: ev.target.value
      }
    })
  }

  const { updateUser, createUserToken, signIn, signInWithGoogle } = useContext(UserContext)

  const handleOnFormSubmit = async (ev) => {
    try {
      ev.preventDefault()
      const response = await signIn(formData)
      updateUser(response.data.user)
      createUserToken(response.data.token)
      toast.success(`Bienvenido ${response.data.user.firstName}`)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <WrapperSignIn>
      <FormStyled onSubmit={handleOnFormSubmit}>
        <LabelStyled htmlFor='email'>Email</LabelStyled>
        <InputStyled onChange={handleOnInputChange} value={formData.email} id='email' name='email' type='email' placeholder='Email' required />
        <LabelStyled htmlFor='password'>Contraseña</LabelStyled>
        <InputStyled onChange={handleOnInputChange} value={formData.password} id='password' name='password' type='password' placeholder='Contraseña' required />
        <Submit type='submit'>Ingresar</Submit>
      </FormStyled>
      <Heading onClick={handleOpenModal} >Olvidaste tu contraseña?</Heading>
      <WrapperSocialButtons>
        <button onClick={signInWithGoogle}>
          <IconGoogle />
        </button>
        <button>
          <IconFacebook />
        </button>
      </WrapperSocialButtons>
      {modalOpen && <SendRecoveryMail setModalOpen={setModalOpen} /> }
    </WrapperSignIn>
  )
}

export { SignIn }

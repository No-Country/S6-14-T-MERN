import { useContext, useState } from 'react'
import styled from 'styled-components'
import { LinkStyled } from '../../../components/button/LinkStyled'
import { UserContext } from '../../../context/user/UserContext'
import { toast } from 'react-toastify'
import { useToggle } from '../../../hooks/toggle/useToggle'

const SectionStyled = styled('section')`
  color: var(--text-two);
  background-color: var(--background-two);
  padding: clamp(3rem, 3vw, 6rem) clamp(1rem,5vw,10rem);
  display: grid;
  grid-template: 
  "heading . edit" auto
  "avatar form form" auto
  "signout signout signout" auto
  / 1fr 1fr 1fr;
  gap: 3rem;

  @media screen and (max-width: 49.75rem) {
     grid-template: 
     "heading" auto
     "avatar" auto
     "edit" auto
     "form" auto
     "signout" auto
     / 1fr;
  }
`
const Heading = styled('h2')`
  font-size: 1.75rem;
  font-weight: bold;
`
const Button = styled('button')`
  grid-area: edit;
  justify-self: flex-end;
  border-radius: 3rem;
  background-color: var(--bg-component-one);
  padding: 0.5rem 3rem;

  @media screen and (max-width: 49.75rem) {
     justify-self: center;
  }
`
const Image = styled('img')`
  grid-area: avatar;
  align-self: center;
`
const FormStyled = styled('form')`
  grid-area: form;
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
const WrapperButtons = styled('div')`
  grid-area: signout;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(2rem, 3vw, 6rem);
`
const Signout = styled(Submit)`
  color: var(--text-one);
  background-color: #ff2121;
`
const MyData = () => {
  const { user, signOut } = useContext(UserContext)

  const [formData, updateFormData] = useState({
    username: user.username || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    address: user.address || '',
    avatar: '',
    email: user.email || '',
    password: '',
    confirmPassword: ''
  })

  const userImage = user.imageUrl || 'https://res.cloudinary.com/dx7jgyz9f/image/upload/v1676918455/logo_custom_sports3_1_r5iivu.png'

  const handleOnInputChange = (ev) => {
    updateFormData((prevFormData) => {
      return {
        ...prevFormData,
        [ev.target.name]: ev.target.value
      }
    })
  }

  const { toggle, onToggle } = useToggle()

  const handleSignOut = () => {
    signOut()
    toast.info('Sesión cerrada')
  }

  return (
    <SectionStyled>
      <Heading>Mis datos</Heading>
      <Button onClick={onToggle} type='button'>Editar perfil</Button>
      <Image src={userImage} alt='mi avatar' />
      <FormStyled>
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
        {toggle && <Submit type='submit'>Guardar cambios</Submit>}
      </FormStyled>
      <WrapperButtons>
        <Signout onClick={handleSignOut} type='button'>Cerrar sesión</Signout>
        {user.isAdmin && <LinkStyled to='/back-office'>Ir al Back Office</LinkStyled>}
      </WrapperButtons>
    </SectionStyled>
  )
}

export { MyData }

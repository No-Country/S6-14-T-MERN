import { useState } from 'react'
import styled from 'styled-components'
import useAuth from '../../hooks/useAuth'
import { SendRecoveryMail } from './sendRecoverMail'

const Div = styled.div`
text-align: center;`

const P = styled.p`
text-align: center;
box-sizing: content-box;
display: block;
float: none;
line-height: normal;
position: static;
margin-bottom: 20px;
cursor: pointer;`

const Social = styled.div`
display:flex;
justify-content: center;
gap: 20px;`

const Socials = styled.div`
border-top: 1px solid black;
width: 15%;
cursor: pointer;`

const Img = styled.img`

margin: 15px 20px;
width: 50%;
`

const Forget = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { signInGoogle, sendNewPassword } = useAuth()
  const google = () => {
    signInGoogle()
  }

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2YzMjJmOGRlZDQwOWE1ZjA0MDI3ZDciLCJpYXQiOjE2NzY5NTc4NjEsImV4cCI6MTY3Njk1ODQ2MX0.4l0Aw7qBZn_axETvhLYQ9jEIZRt3goUL9jESx3J73w4'
  const facebook = () => {
    sendNewPassword(token, "123457as")
  }
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <Div>
      <P onClick={handleOpenModal} >¿Olvidaste tu contraseña?</P>
      <Social>
        <Socials onClick={google} >
          <Img className='foto' src='https://res.cloudinary.com/dumfolpig/image/upload/v1676229689/logos/google_vspd0o.svg' alt='google' />
        </Socials>
        o
        <Socials onClick={facebook}>
          <Img className='foto' src='https://res.cloudinary.com/dumfolpig/image/upload/v1676229689/logos/facebook_f3sodb.svg' alt='facebook' />
        </Socials>
      </Social>
      {modalOpen && <SendRecoveryMail setModalOpen={setModalOpen} /> }
    </Div>
  )
}

export { Forget }

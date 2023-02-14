import styled from 'styled-components'

const Div = styled.div`
text-align: center;`

const P = styled.p`
text-align: center;
box-sizing: content-box;
display: block;
float: none;
line-height: normal;
position: static;`

const Social = styled.div`
display:flex;
justify-content: center;
gap: 20px;`

const Socials = styled.div`
border-top: 1px solid black;
width: 15%;`

const Img = styled.img`
margin-top: 15px;`

const Forget = () => {
  return (
    <Div>
    <P>¿Olvidaste tu contraseña?</P>
    <Social>
      <Socials>
        <Img className='foto' src="https://res.cloudinary.com/dumfolpig/image/upload/v1676229689/logos/google_vspd0o.svg" alt="" />
      </Socials>
        o
      <Socials>
        <Img className='foto'  src="https://res.cloudinary.com/dumfolpig/image/upload/v1676229689/logos/facebook_f3sodb.svg" alt="" />
      </Socials>
    </Social>
  </Div>
  )
}

export {Forget}

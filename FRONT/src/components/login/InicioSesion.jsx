import styled from 'styled-components'

const Containt = styled.div`
background-color: #F5F5F5;
width: 100%;
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`

const Login = styled.div`
width: 35rem;
display: block;
justify-content: center;
align-items: center;`

const H1 = styled.h1`
box-sizing: content-box;
display: block;
float: none;
line-height: normal;
position: static;`

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

const Input = styled.input`
display: block;
padding: 10px 0 10px 0;
width: 50%;`

const Submit = styled.input`
border: none;
border-radius: 100px;
padding: 10px;
margin: 20px;
width: 10rem;
color: white;
background-color: #006FCF;`

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

const Register = styled.div`
width: 24rem;
padding: 70px 0 0 90px;`

const Ul = styled.ul`
padding: 17px;`

const InicioSesion = () => {

  const getForm =e=>{
    e.preventDefault();
    let datos = e.target;
    let user = {
      email: datos.email.value,
      password: datos.password.value
    }
    console.log(user)
  }

  return (

    <Containt>
      <Login>
      <H1>Iniciar Sesión</H1>
        <Form onSubmit={getForm}>
          <Input as= "label" htmlFor="email">Email o Usuario</Input>
          <Input type="email" placeholder='Email o Usuario' name='email' />
          <Input as= "label" htmlFor="password">Password</Input>
          <Input type="password" placeholder='Contraseña' name='password' />
          <Submit type="submit" value="Ingresar" />
        </Form>
  
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
      </Login>

      <Register>
        <h2>Registrarse</h2>
        <p>Crearse una cuenta tiene muchos beneficios</p>
        <Ul>
          <li>Guardar diseños</li>
          <li>Seguiemiento de pedidos</li>
          <li>Accede a descuentos</li>
        </Ul>
        <Submit className='registeri' type="submit" value="Registrarse" />
      </Register>
    </Containt>
  )
}

export default InicioSesion;

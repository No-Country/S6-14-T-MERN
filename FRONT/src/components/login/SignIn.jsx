import styled from 'styled-components'
import { Submit } from './Variables'
import { Forget } from './Forget'

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

const SignIn = () => {
  return (
    // <form>
    //   example
    // </form>
    
    <Login>
    <H1>Iniciar Sesión</H1>
      <Form>
        <Input as= "label" htmlFor="email">Email o Usuario</Input>
        <Input type="email" placeholder='Email o Usuario' name='email' />
        <Input as= "label" htmlFor="password">Password</Input>
        <Input type="password" placeholder='Contraseña' name='password' />
        <Submit type="submit" value="Ingresar" />
      </Form>
      <Forget />
    </Login>
  )
}

export { SignIn }

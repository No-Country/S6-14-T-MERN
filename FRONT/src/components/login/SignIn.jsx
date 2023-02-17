import styled from 'styled-components'
import { Submit } from './Variables'
import { Forget } from './Forget'

const Login = styled.div`
width: 35rem;
display: block;
justify-content: center;
align-items: center;`

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

const Input = styled.input`
border: 1px solid;
display: block;
padding: 10px 0 10px 0;
width: 50%;`

const Label = styled.input`
display: block;
padding: 10px 0 10px 0;
width: 50%;`

const SignIn = () => {
  return (
  // <form>
  // example
  // </form>
    <Login>
      <Form>
        <Label as='label' htmlFor='email'>Email o Usuario</Label>
        <Input type='email' placeholder='Email o Usuario' name='email' />
        <Label as='label' htmlFor='password'>Password</Label>
        <Input type='password' placeholder='Contraseña' name='password' />
        <Submit type='submit' value='Ingresar' />
      </Form>
      <Forget />
    </Login>
  )
}

export { SignIn }

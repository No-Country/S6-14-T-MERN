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

const Select = styled.select`
/* margin-top: 10px; */
margin-left: 0;
border: 1px solid black;
padding: 10px 0 10px 0;
width: 50%;`

const FormRegister = () => {
  return (
    <Login>
      <Form>
        <Label as='label' htmlFor='nombre'>Nombre</Label>
        <Input type='text' placeholder='Nombre' name='nombre' />
        <Label as='label' htmlFor='apellido'>Apellido</Label>
        <Input type='text' placeholder='Apellido' name='apellido' />
        <Label as='label' htmlFor='genero'>Genero</Label>
        <Select name='genero'>
          <option disabled=''>Selecciona genero</option>
          <option value='mujer' name='mujer'>Mujer</option>
          <option value='hombre' name='hombre'>Hombre</option>
        </Select>
        <Label as='label' htmlFor='email'>Email</Label>
        <Input type='email' placeholder='Email' name='email' />
        <Label as='label' htmlFor='password'>Contraseña</Label>
        <Input type='password' placeholder='Contraseña' name='password' />
        <Label as='label' htmlFor='confipassword'>Confirmar contraseña</Label>
        <Input type='password' placeholder='Confirmar contraseña' name='confipassword' />
        <Submit type='submit' value='Registrarse' />
      </Form>
      <Forget />
    </Login>
  )
}

export { FormRegister }

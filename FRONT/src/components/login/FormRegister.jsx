import styled from 'styled-components'
import { Submit } from './Variables'
// import { Forget } from './Forget'
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const handleClick = () => {
    console.log()
    signUp({
      firstName: "Alejandro",
      lastName: "Senger",
      email: "alex.senger@hotmail.com",
      password: "12345678",
    });
    navigate('/login');
  };

  return (
    <Login>
      <Form>
        <Label as='label' htmlFor='nombre'>Nombre</Label>
        <Input type='text' placeholder='Nombre' name='nombre' />
        <Label as='label' htmlFor='genero'>Genero</Label>
        <Select name='genero'>
          <option value='mujer'>Mujer</option>
          <option value='hombre'>Hombre</option>
        </Select>
        <Label as='label' htmlFor='email'>Email o Usuario</Label>
        <Input type='email' placeholder='Email o Usuario' name='email' />
        <Label as='label' htmlFor='password'>Password</Label>
        <Input type='password' placeholder='Contraseña' name='password' />
        <Submit onClick={handleClick} type='button' value='Registrarse' />
      </Form>
      {/* <Forget /> */}
    </Login>
  )
}

export { FormRegister }

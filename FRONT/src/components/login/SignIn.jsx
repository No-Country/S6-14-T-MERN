import styled from 'styled-components'
import { Submit } from './Variables'
import { Forget } from './Forget'
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
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

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const handleClick = async () => {
    const isLogued = await signIn(formValues.email, formValues.password);
    if (isLogued) navigate('/')
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Login>
      <Form>
        <Label as='label' htmlFor='email'>Email o Usuario</Label>
        <Input type='email' placeholder='Email o Usuario' name='email' value={formValues.email} onChange={handleInputChange} />
        <Label as='label' htmlFor='password'>Password</Label>
        <Input type='password' placeholder='Contraseña' name='password' value={formValues.password} onChange={handleInputChange} />
        <Submit onClick={handleClick} type='button' value='Ingresar' />
      </Form>
      <Forget />
    </Login>
  );
};

export { SignIn }

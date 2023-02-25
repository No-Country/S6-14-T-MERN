import styled from "styled-components";
import { Submit } from "./Variables";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Forget } from "./Forget";
import { useState } from "react";

const Login = styled.div`
  width: 35rem;
  display: block;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid;
  display: block;
  padding: 10px 0 10px 0;
  width: 50%;
`;

const Label = styled.label`
  display: block;
  padding: 10px 0 10px 0;
  width: 50%;
`;

const Select = styled.select`
  /* margin-top: 10px; */
  margin-left: 0;
  border: 1px solid black;
  padding: 10px 0 10px 0;
  width: 50%;
`;

const FormRegister = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleClick = async () => {
    const created = await signUp(formValues);
    if (created) navigate("/login");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  
  return (
    <Login>
      <Form>
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          type="text"
          placeholder="Nombre"
          name="firstName"
          value={formValues.firstName}
          onChange={handleInputChange}
        />
        <Label htmlFor="apellido">Apellido</Label>
        <Input
          type="text"
          placeholder="Apellido"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
        />
        <Label htmlFor="genero">Genero</Label>
        <Select name="genero">
          <option disabled>Selecciona genero</option>
          <option value="mujer">Mujer</option>
          <option value="hombre">Hombre</option>
        </Select>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <Label htmlFor="password">Contraseña</Label>
        <Input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <Label htmlFor="confirmpassword">Confirmar contraseña</Label>
        <Input
          type="password"
          placeholder="Confirmar contraseña"
          name="confirmpassword"
        />
        <Submit onClick={handleClick} type="button" value="Registrarse" />
      </Form>
      {/*<Forget />*/}
    </Login>
  );
};


export { FormRegister };

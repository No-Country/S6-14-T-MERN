import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Register = styled.div`
  width: 24rem;
  padding: 20px 0 0 90px;
`;

const Ul = styled.ul`
  padding: 17px;
`;

const Li = styled.li`
  list-style: disc;
`;

const Button = styled.button`
  border: none;
  border-radius: 100px;
  padding: 10px;
  margin: 20px;
  width: 10rem;
  color: white;
  background-color: #006fcf;
`;

const SignUp = () => {
  
  
  return (
    <Register>
      <h2>
        <strong>Registrarse</strong>
      </h2>
      <p>Crearse una cuenta tiene muchos beneficios</p>
      <Ul>
        <Li>Guardar diseños</Li>
        <Li>Seguiemiento de pedidos</Li>
        <Li>Accede a descuentos</Li>
      </Ul>
      <NavLink to="/register">
        <Button >Registrarse</Button>
      </NavLink>
    </Register>
  );
};

export { SignUp };

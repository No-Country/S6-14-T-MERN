import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import instance from "../../services/axios";
import endPoints from "../../services/api";

const WrapperSignIn = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  grid-area: signin;
`;
const FormStyled = styled("form")`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;
const LabelStyled = styled("label")`
  font-size: 0.875rem;
  font-weight: bold;
`;
const InputStyled = styled("input")`
  padding: 0.5rem;
  outline: none;
  border-radius: 0.5rem;
  background-color: #f0f0f0;
  width: 100%;
`;
const Submit = styled("button")`
  color: black;
  align-self: center;
  border-radius: 3rem;
  background-color: var(--bg-component-one);
  padding: 0.5rem 3rem;
`;

const ResetPassword = () => {
  const navigate = useNavigate()
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const token = params.get("token");

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleOnInputChange = (ev) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const handleOnFormSubmit = async (ev) => {
      ev.preventDefault();
      await instance().post(endPoints.auth.recetPassword, {
        password: formData.password,
        token,
      })
        .then((res) => {
          console.log({res})
          toast.success(`Se ha actualizado su contraseña`);
          navigate('/login')
        })
        .catch ((error) => {
          toast.error(error.response.data.message);
          console.log({ error });
        })
  }

  return (
    <WrapperSignIn>
      <FormStyled onSubmit={handleOnFormSubmit}>
        <LabelStyled htmlFor="password">New Password</LabelStyled>
        <InputStyled
          onChange={handleOnInputChange}
          value={formData.password}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <LabelStyled htmlFor="password">Contraseña</LabelStyled>
        <InputStyled
          onChange={handleOnInputChange}
          value={formData.confirmPassword}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <Submit type="submit">Restablecer contraseña</Submit>
      </FormStyled>
    </WrapperSignIn>
  );
};

export { ResetPassword };

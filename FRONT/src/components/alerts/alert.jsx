import React, { useContext } from "react";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import AppContext from "../../context/AppContext";

const Container = styled.div`
  position: fixed;
  top: 8%;
  right: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  background-color: ${({ type }) =>
    type === "success" ? "#2ECC71" : "#E74C3C"};
  color: #fff;
  border-radius: 2rem;
`;

const CloseIcon = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  top: 4%;
  right: 1%;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Message = styled.p`
  font-size: 1.2rem;
  width: 90%;
  margin: 0.5% 1%;
`;

function Alert() {
  const { state, setState } = useContext(AppContext);
  useEffect(() => {
    if (state.alert && typeof state.alert === "object") {
      const timerId = setTimeout(() => {
        setState.setAlert(false);
      }, 3000);
      return () => clearTimeout(timerId);
    }
  }, [state.alert, setState]);

  const handleClose = () => {
    setState.setAlert(false);
  };

  return state.alert && typeof state.alert === "object" ? (
    <Container type={state.alert.type}>
      <Message>
        {state.alert.type?.toUpperCase()}:{" "}
        {state.alert.message || "Ups! Something went wrong D:"}
      </Message>
      <CloseIcon onClick={handleClose} />
    </Container>
  ) : null;
}

export { Alert };

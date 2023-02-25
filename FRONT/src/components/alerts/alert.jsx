import React, { useContext } from 'react';
import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';

import useInitialState from '../../hooks/useInitialState';

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  // padding: 12px;
  background-color: ${({ type }) => type === "success" ? "#4CAF50" : "#f44336"};
  color: #fff;
  z-index: 99999;
`;

const CloseIcon = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 4px;
  width: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Message = styled.p`
  font-size: 1.2rem;
  width: 90%;
  margin: 8px;
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
      <Message>{state.alert.message?.toUpperCase() || "Ups! Something went wrong D:"}</Message>
      <CloseIcon onClick={handleClose} />
    </Container>
  ) : null;
  }  

export { Alert };
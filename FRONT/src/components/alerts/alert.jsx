import React, { useContext } from 'react';
import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';

import useInitialState from '../../hooks/useInitialState';

const ErrorContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 12px;
  background-color: ${({ type }) => type === "success" ? "#4CAF50" : "#f44336"};
  color: #fff;
  z-index: 99999;
`;

const CloseIcon = styled(FaTimes)`
  cursor: pointer;
  margin-right: 8px;
`;


const ErrorMessage = styled.p`
  font-size: 1.2rem;
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
    <ErrorContainer type={state.alert.type}>
      <ErrorMessage>{state.alert.message?.toUpperCase() || "Ups! Something went wrong D:"}</ErrorMessage>
      <CloseIcon onClick={handleClose} />
    </ErrorContainer>
  ) : null;
  }  

export { Alert };
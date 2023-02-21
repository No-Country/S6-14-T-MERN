import { useEffect, useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  min-width: 390px;
  height: 35%;
  position: absolute;
  top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  input[type="email"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ccc;
    background-color: #f8f8f8;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }
`;

const SendRecoveryMail = ({setModalOpen}) => {
  const { sendMail } = useAuth()
  const [email, setEmail] = useState("");

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = () => {
    sendMail(email);
    handleCloseModal();
  };

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      } else if (event.key === "Enter") {
        handleSendEmail();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Modal onClick={handleCloseModal}>
      <ModalContent onClick={handleContentClick}>
        <h2>Ingresá tu correo electrónico</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleSendEmail}>Enviar</button>
      </ModalContent>
    </Modal>
  );
};

export { SendRecoveryMail };

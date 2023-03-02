import { useEffect, useState } from "react";
import styled from "styled-components";
import endPoints from "../../services/api";
import instance from "../../services/axios";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 2%;
  border: 0.1rem solid #888;
  width: 50%;
  min-width: 390px;
  height: 35%;
  position: absolute;
  top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input[type="email"] {
    width: 100%;
    height: 40%;
    padding: 0% 4%;
    border-bottom: 0.1rem solid #ccc;
    background-color: #f8f8f8;
    font-size: 1.2rem;

  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 0 4%;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 40%;
    font-size: 1.2rem;
  }

  button:hover {
    opacity: 0.8;
  }
`;

const SendRecoveryMail = ({setModalOpen}) => {
  const [email, setEmail] = useState("");

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = async () => {
    const response = await instance().post(endPoints.auth.sendRecoveryMail, { email })
    console.log({response})
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
        <input
          type="email"
          placeholder="Ingresá tu correo electrónico"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleSendEmail}>Enviar</button>
      </ModalContent>
    </Modal>
  );
};

export { SendRecoveryMail };

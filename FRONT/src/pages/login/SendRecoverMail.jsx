import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  background-color: black;
  padding: 2%;
  border: 0.1rem solid #888;
  border-radius: 2rem;
  width: 50%;
  min-width: 390px;
  position: absolute;
  top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input[type="email"] {
    padding: 0.5rem;
    outline: none;
    border-radius: 0.5rem;
    background-color: #f0f0f0;
    width: 100%;
    margin-bottom: 5%;
  }

  button {
    align-self: center;
    border-radius: 3rem;
    background-color: var(--bg-component-one);
    padding: 0.5rem 3rem;
  }

  button:hover {
    opacity: 0.8;
  }
`;

const SendRecoveryMail = ({ setModalOpen }) => {
  const [email, setEmail] = useState("");

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = async () => {
    try {
      const response = await instance().post(endPoints.auth.sendRecoveryMail, {
        email,
      });
      setEmail("")
      handleCloseModal();
      toast.success(`${response.data.message}`)
    } catch (error) {
      toast.error(error.response.data.message)
      console.log({ error });
    }
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

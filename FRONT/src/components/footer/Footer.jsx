import styled from "styled-components";
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
const Footer = () => {
  
const FooterContainer = styled.footer`
  background-color: black;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const ColumnTitle = styled.h4`
  margin-bottom: 10px;
  color: white;
`;

const ColumnList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ColumnListItem = styled.li`
  margin-bottom: 10px;
  color: grey;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SocialIcon = styled.i`
  display: flex;
  justify-content: space-around;
  color : white;
`;

  return (
    <FooterContainer>
      <Column>
        <ColumnTitle>Dejanos tu correo para recibir novedades y descuentos</ColumnTitle>
        <InputContainer>
          <Input placeholder="Email" />
          <div>
            <SocialIcon>
              <FaFacebookF  />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </SocialIcon>
            
          </div>
        </InputContainer>
      </Column>
      <Column>
        <ColumnTitle>Categorías</ColumnTitle>
        <ColumnList>
          <ColumnListItem>Productos</ColumnListItem>
          <ColumnListItem>Ofertas</ColumnListItem>
          <ColumnListItem>Servicios</ColumnListItem>
        </ColumnList>
      </Column>
      <Column>
        <ColumnTitle>Información</ColumnTitle>
        <ColumnList>
          <ColumnListItem>Política de privacidad</ColumnListItem>
          <ColumnListItem>Términos y condiciones</ColumnListItem>
          <ColumnListItem>Mapa del sitio</ColumnListItem>
        </ColumnList>
      </Column>
    </FooterContainer>
  );
};

export { Footer };

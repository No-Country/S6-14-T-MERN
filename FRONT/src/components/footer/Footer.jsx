import styled from "styled-components";

const Footer = () => {
  const FooterContainer = styled.footer`
    background-color: #f8f9fa;
    padding: 40px;
  `;

  const Column = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const ColumnTitle = styled.h4`
    margin-bottom: 10px;
  `;

  const ColumnList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
  `;

  const ColumnListItem = styled.li`
    margin-bottom: 10px;
  `;

  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Input = styled.input`
    padding: 8px;
    margin-bottom: 10px;
  `;

  const SocialIcon = styled.i`
    font-size: 24px;
    margin: 0 10px;
  `;

  return (
    <FooterContainer>
      <Column>
        <ColumnTitle>Contáctanos</ColumnTitle>
        <InputContainer>
          <Input placeholder="Ingresa tu correo electrónico" />
          <div>
            <SocialIcon className="fab fa-facebook"></SocialIcon>
            <SocialIcon className="fab fa-twitter"></SocialIcon>
            <SocialIcon className="fab fa-instagram"></SocialIcon>
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

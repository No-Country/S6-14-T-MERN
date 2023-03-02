import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const FooterContainer = styled.footer`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ColumnTitle = styled.h4`
  margin-bottom: 10px;
  color: white;
`

const ColumnList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ColumnListItem = styled.li`
  font-size: 1.02rem;
  font-weight: 300;
  margin: 0.3rem 0rem !important;
  cursor: pointer;
  color: grey;
`

const buttonSubmit = styled.button``

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
`

const Input = styled.input`
  /* padding-bottom: 15px; */
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: left;
`

const Info = styled.h4``

const SocialIcon = styled.i`
  display: flex;
  justify-content: space-around;
  color: white;
  padding-top: 15px;
  /* margin-bottom: 25px;*/
`
const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <ColumnTitle>
          Dejanos tu correo para recibir novedades y descuentos
        </ColumnTitle>
        <InputContainer>
          <Input placeholder='Email' />
        </InputContainer>

        <SocialIcon>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </SocialIcon>
      </Column>
      <Column>
        <ColumnTitle>Categorías</ColumnTitle>
        <ColumnList>
          <ColumnListItem>Hombre</ColumnListItem>
          <ColumnListItem>Mujer</ColumnListItem>
          <ColumnListItem>Diseñador</ColumnListItem>
          <ColumnListItem>Mayorista</ColumnListItem>
        </ColumnList>
      </Column>
      <Column>
        {/* <ColumnTitle> */}
        <Info>Informacion</Info>
        {/* </ColumnTitle> */}
        <ColumnList>
          <ColumnListItem>Contacto</ColumnListItem>
          <ColumnListItem>Preguntas frecuentes</ColumnListItem>
          <ColumnListItem>Sobre nosotros</ColumnListItem>
          <ColumnListItem>Politica de devolución</ColumnListItem>
          <ColumnListItem>Politica de Privacidad</ColumnListItem>
        </ColumnList>
      </Column>
    </FooterContainer>
  )
}

export { Footer }

import { IconCart, IconLogo, IconLogoTitle, LinkStyled } from '../export'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled('header')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
`
const HeadingLink = styled(Link)`
 display: flex;
 justify-content: center;
 align-items: center;
`
const NavbarStyled = styled('nav')`
  & ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
  }
`
const NavbarLink = styled(Link)`
  font-size: 0.875rem;
`

const Header = () => {
  return (
    <HeaderStyled>
      <HeadingLink to='/'>
        <IconLogo />
        <IconLogoTitle />
      </HeadingLink>
      <NavbarStyled>
        <ul>
          <li>
            <NavbarLink to='/hombre'>Hombre</NavbarLink>
          </li>
          <li>
            <NavbarLink to='/mujer'>Mujer</NavbarLink>
          </li>
          <li>
            <NavbarLink to='/diseñador'>Diseñador</NavbarLink>
          </li>
          <li>
            <NavbarLink to='/mayorista'>Mayorista</NavbarLink>
          </li>
        </ul>
      </NavbarStyled>
      <IconCart />
      <LinkStyled to='/login'>Iniciar sesión</LinkStyled>
    </HeaderStyled>
  )
}

export { Header }

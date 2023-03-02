import { Link } from 'react-router-dom'
import { useToggle } from '../../hooks/toggle/useToggle'
import { IconBurgerMenu, IconCart, IconLogo, IconLogoTitle, IconUser } from '../export'
import styled, { css } from 'styled-components'
import { IsLogged } from '../logged/IsLogged'

const HeaderStyled = styled('header')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem clamp(1rem, 5vw, 10rem);

  & svg {
    fill: var(--text-one);
  }
`
const WrapperLogo = styled(Link)`
 display: flex;
 justify-content: center;
 align-items: center;

 & svg:nth-child(2) {
  @media screen and (max-width:64rem) {
    display: none;
  }
 }
`
const WrapperIcons = styled('div')`
  display: none;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 64rem) {
    display: flex;
  }
`
const NavbarStyled = styled('nav')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 64rem) {
    height: 0;
    width: 100%;
    opacity: 0;
    overflow: hidden;
    transition: height 500ms, opacity 500ms ease-in-out;
    ${({ isActive }) => isActive && css`
      height: 20rem;
      opacity: 1;
    `}
  }
`
const NavbarUl = styled('ul')`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: clamp(2.5rem, 4.5vw, 9rem);

    @media screen and (max-width: 64rem) {
      flex-direction: column;
    }
`
const NavbarLink = styled(Link)`
  font-size: 0.875rem;
`
const WrapperCart = styled(Link)`
  @media screen and (max-width: 64rem) {
    display: none;
  }
`
const LinkSignInMobile = styled(Link)`
  @media screen and (max-width: 64rem) {
    display: none;
  }
`
const LinkSignInDesktop = styled(Link)`
  color: var(--text-two);
  border-radius: 3rem;
  background-color: var(--bg-component-one);
  padding: 0.5rem 3rem;

  @media screen and (max-width: 64rem) {
    display: none;
  }
`
const Header = () => {
  const { toggle, onToggle } = useToggle()

  return (
    <HeaderStyled>
      <WrapperLogo to='/'>
        <IconLogo />
        <IconLogoTitle />
      </WrapperLogo>
      <WrapperIcons>
        <Link to='/cart'><IconCart /></Link>
        <IsLogged
          logged={<Link to='/profile'><IconUser /></Link>}
          notLogged={<Link to='/login'><IconUser /></Link>}
        />
        <button onClick={onToggle}>
          <IconBurgerMenu />
        </button>
      </WrapperIcons>
      <NavbarStyled isActive={toggle}>
        <NavbarUl>
          <li onClick={onToggle}>
            <NavbarLink to='/hombre'>Hombre</NavbarLink>
          </li>
          <li onClick={onToggle}>
            <NavbarLink to='/mujer'>Mujer</NavbarLink>
          </li>
          <li onClick={onToggle}>
            <NavbarLink to='/diseñador'>Diseñador</NavbarLink>
          </li>
          <li onClick={onToggle}>
            <NavbarLink to='/mayorista'>Mayorista</NavbarLink>
          </li>
        </NavbarUl>
      </NavbarStyled>
      <WrapperCart to='/cart'>
        <IconCart />
      </WrapperCart>
      <IsLogged
        logged={<LinkSignInMobile to='/profile'><IconUser /></LinkSignInMobile>}
        notLogged={<LinkSignInDesktop to='/login'>Iniciar sesión</LinkSignInDesktop>}
      />
    </HeaderStyled>
  )
}

export { Header }

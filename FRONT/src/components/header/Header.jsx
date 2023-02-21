import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

const HeaderStyled = styled("header")`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem 1.25rem 8.75rem;
`;
const HeadingLink = styled(Link)`
  color: #000000;
  font-size: 1.125rem;
  font-weight: 700;
`;
const NavbarStyled = styled("nav")`
  & ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
  }
`;
const NavbarLink = styled(Link)`
  color: #000000;
  font-size: 0.875rem;
  font-weight: 400;
`;
const HeaderButton = styled("button")`
  color: #000000;
  font-size: 1rem;
  font-weight: 700;
`;
const FormSearch = styled("form")`
  width: 7.5rem;

  & input {
    text-align: center;
    width: 100%;
    background-repeat: no-repeat;
    background-position: 5% 50%;
    background-image: url("https://res.cloudinary.com/dos3i5jqy/image/upload/v1676076569/images/search_e5sffn.svg");
  }
`;
const GroupButton = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
const Header = () => {
  const { signOut } = useAuth();
  return (
    <HeaderStyled>
      <HeadingLink to="/">Custom Sports</HeadingLink>
      <NavbarStyled>
        <ul>
          <li>
            <p>Hombre</p>
          </li>
          <li>
            <NavbarLink to="/mujer">Mujer</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/diseñador">Diseñador</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/mayorista">Mayorista</NavbarLink>
          </li>
        </ul>
      </NavbarStyled>
      <FormSearch>
        <input type="text" name="search" id="search" placeholder="Buscar" />
      </FormSearch>
      <GroupButton>
        <button>
          <svg
            width="19"
            height="22"
            viewBox="0 0 19 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.0178 18.4938L16.4885 6.0293C16.4428 5.8043 16.2635 5.625 16.0385 5.625H12.7531V4.36464C12.7531 1.75428 11.3135 0 9.15313 0C6.99277 0 5.55313 1.75428 5.55313 4.36464V5.625H1.99885C1.77385 5.625 1.59455 5.8043 1.54885 6.0293L0.0195675 18.4938C-0.0700815 19.1231 0.154918 19.7981 0.559207 20.2481C0.963505 20.7438 1.59457 21.0128 2.22385 21.0128H15.7697C16.399 21.0128 17.0301 20.7421 17.4344 20.2481C17.8826 19.7999 18.1076 19.1249 18.018 18.4938H18.0178ZM6.45322 4.4084C6.45322 2.78768 7.17394 0.943757 9.15322 0.943757C11.1325 0.943757 11.8532 2.78948 11.8532 4.4084V5.66876H6.45322V4.4084ZM16.8032 19.6643C16.5325 19.935 16.1739 20.1143 15.8136 20.1143H2.22403C1.81973 20.1143 1.45939 19.935 1.23439 19.6643C1.00939 19.3936 0.874037 18.9893 0.919739 18.585L2.40334 6.56867H15.6324L17.1178 18.6291C17.1635 18.9895 17.0282 19.3938 16.8032 19.6645L16.8032 19.6643Z"
              fill="black"
            />
          </svg>
        </button>
        <HeaderButton>
          {" "}
          <NavbarLink to="/login"> Login</NavbarLink>
          <NavbarLink onClick={signOut} to="/"> SignOut</NavbarLink>
        </HeaderButton>
      </GroupButton>
    </HeaderStyled>
  );
};

export { Header };

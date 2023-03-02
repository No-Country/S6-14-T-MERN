import React, { useContext } from "react";
import styled from "styled-components";
import { BackOfficeContext } from "../../../context/back office/BackOfficeContext";

const ContainerUsers = styled.div`
  position: relative;
  margin: 2rem;
`;

const Title = styled.h5`
  margin: 1rem 0;
  font-size: 32px;
`;

const InfoGrid = styled.div`
  display: grid;
  margin: 2rem 0;
  border: 1px solid white;
  grid-template-areas:
    "a"
    "b"
    "c"
    "d"
    "e"
    "f"
    "g";

  div {
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    p:nth-child(1) {
      font-size: 1.2rem;
      color: red;
    }
  }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    grid-template-areas:
      "a  b"
      "c  d"
      "e  f"
      "g  g";
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-areas:
      "a  b  c"
      "d  e  f"
      "g  g  g";
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-areas:
      "a  b  c d"
      "e  f  g g ";
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-areas:
      "a  b  c  d  e"
      "f  f  g  g  g";
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    grid-template-areas: "a  b  c  d  e  f  g";
  }
`;

const UsersContainer = styled.div`
  max-height: 40rem;
  overflow-y: auto;
`;

const DeleteDiv = styled.div`
  @media (min-width: 576px) {
    grid-area: g;
  }
`;

const EditDiv = styled.div`
  @media (min-width: 1200px) {
    grid-area: f;
  }
`;

const TitleNoUsersFound = styled.h5`
  text-align: center;
  font-size: 23px;
`;

const BackUsers = () => {
  const { users, deleteUser } = useContext(BackOfficeContext);
  return (
    <ContainerUsers>
      <Title>Usuarios</Title>
      {users.length > 0 ? (
        <UsersContainer>
          {users.map((user) => (
            <InfoGrid key={user._id}>
              <div>
                <p>ID</p>
                <p>{user._id}</p>
              </div>
              <div>
                <p>Name</p>
                <p>{user.firstName}</p>
              </div>
              <div>
                <p>Apellido</p>
                <p>{user.lastName} </p>
              </div>
              <div>
                <p>Email</p>
                {user.email ? (
                  <p>{user.email}</p>
                ) : (
                  <p>User logged with google</p>
                )}
              </div>
              <div>
                <p>Es Admin</p>
                <p>{user.isAdmin.toString()}</p>
              </div>
              <EditDiv>Editar</EditDiv>
              <DeleteDiv
                onClick={() => {
                  if (confirm("Are you sure you want to delete this user?")) {
                    deleteUser(user._id);
                  }
                }}
              >
                Borrar
              </DeleteDiv>
            </InfoGrid>
          ))}
        </UsersContainer>
      ) : (
        <TitleNoUsersFound>No Users Found</TitleNoUsersFound>
      )}
    </ContainerUsers>
  );
};

export { BackUsers };

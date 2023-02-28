import React, { useContext } from "react";
import styled from "styled-components";
import { BackOfficeContext } from "../../../context/back office/BackOfficeContext";

const ContainerProducts = styled.div`
  position: relative;
  margin: 2rem;
`;

const Title = styled.h5`
  font-size: 32px;
`;

const InfoGrid = styled.div`
  display: grid;
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

const ContainerImg = styled.div`
  @media (min-width: 576px) {
    grid-area: a;
  }
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

const ProductImg = styled.img`
  max-width: 13rem;
  border-style: none;
`;

const BackProducts = () => {
  const { products } = useContext(BackOfficeContext);
  return (
    <ContainerProducts>
      <Title>Productos</Title>

      {products.map((product) => (
        <InfoGrid key={product._id}>
          <ContainerImg>
            <ProductImg src={product.imageUrl} />
          </ContainerImg>

          <div>
            <p>ID</p>
            <p>{product._id}</p>
          </div>
          <div>
            <p>Name</p>
            <p>{product.name}</p>
          </div>
          <div>
            <p>Price</p>
            <p>${product.price} </p>
          </div>
          <div>
            <p>Category</p>
            <p>{product.category.name}</p>
          </div>
          <EditDiv>Editar</EditDiv>
          <DeleteDiv>Borrar</DeleteDiv>
        </InfoGrid>
      ))}
    </ContainerProducts>
  );
};

export { BackProducts };

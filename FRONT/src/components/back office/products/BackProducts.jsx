import React, { useContext } from "react";
import styled from "styled-components";
import { BackOfficeContext } from "../../../context/back office/BackOfficeContext";

const ContainerProducts = styled.div`
  position: relative;
  margin: 2rem;
`;

const Title = styled.h5`
  margin: 1rem 0;
  font-size: 32px;
`;

const InfoGrid = styled.div`
  display: grid;
  border: 1px solid white;
  margin: 2rem 0;
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

const ProductsContainer = styled.div`
  max-height: 40rem;
  overflow-y: auto;
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

const TitleNoProductsFound = styled.h5`
  text-align: center;
  font-size: 23px;
`;

const BackProducts = () => {
  const { products, deleteProduct } = useContext(BackOfficeContext);
  return (
    <ContainerProducts>
      <Title>Productos</Title>
      {products.length > 0 ? (
        <ProductsContainer>
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
              <DeleteDiv
                onClick={() => {
                  if (
                    confirm("Are you sure you want to delete this product?")
                  ) {
                    deleteProduct(product._id);
                  }
                }}
              >
                Borrar
              </DeleteDiv>
            </InfoGrid>
          ))}
        </ProductsContainer>
      ) : (
        <TitleNoProductsFound>No products Found</TitleNoProductsFound>
      )}
    </ContainerProducts>
  );
};

export { BackProducts };

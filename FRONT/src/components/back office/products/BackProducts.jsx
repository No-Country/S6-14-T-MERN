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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  border: 1px solid white;

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
`;

const ContainerImg = styled.div``;

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
        <InfoGrid>
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
          <div>Editar</div>
          <div>Borrar</div>
        </InfoGrid>
      ))}
    </ContainerProducts>
  );
};

export { BackProducts };

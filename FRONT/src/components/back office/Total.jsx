import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { BackOfficeContext } from "../../context/back office/BackOfficeContext";

const Title = styled.h2`
  margin: 1rem 0;
  font-size: 30px;
  text-align: center;

  @media screen and (min-width: 992px) {
    font-size: 40px;
  }
`;

const TitleTotal = styled.h5`
  font-size: 25px;

  @media screen and (min-width: 992px) {
    font-size: 32px;
  }
`;

const EachTotalContainer = styled.div`
  text-align: center;
`;

const TotalQuantity = styled.h6`
  font-size: 30px;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;

  @media screen and (min-width: 992px) {
    flex-wrap: no-rap;
    gap: 0;
  }
`;

const Total = () => {
  const { products, users, orders } = useContext(BackOfficeContext);

  let totalAmount = 0;

  for (let order of orders) {
    if (order.priceAmount) {
      totalAmount += order.priceAmount;
    }
  }

  return (
    <>
      <Title>Back Office</Title>
      <TotalContainer>
        <EachTotalContainer>
          <TitleTotal>Total Productos</TitleTotal>
          <TotalQuantity>{products.length}</TotalQuantity>
        </EachTotalContainer>
        <EachTotalContainer>
          <TitleTotal>Total Usuarios</TitleTotal>
          <TotalQuantity>{users.length}</TotalQuantity>
        </EachTotalContainer>
        <EachTotalContainer>
          <TitleTotal>Total facturado</TitleTotal>
          <TotalQuantity>${totalAmount}</TotalQuantity>
        </EachTotalContainer>
      </TotalContainer>
    </>
  );
};

export { Total };

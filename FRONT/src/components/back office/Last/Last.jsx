import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BackOfficeContext } from "../../../context/back office/BackOfficeContext";
import { LastTable } from "./LastTable";

const TitleLast = styled.h5`
  font-size: 25px;

  @media screen and (min-width: 992px) {
    font-size: 32px;
  }
`;

const EachLastContainer = styled.div`
  text-align: center;
`;

const LastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;

  @media screen and (min-width: 992px) {
    flex-wrap: no-rap;
    gap: 0;
  }
`;

const Last = () => {
  const { lastOrder, lastUser, lastProduct } = useContext(BackOfficeContext);

  return (
    <>
      <LastContainer>
        <EachLastContainer>
          <TitleLast>Ultimo Producto</TitleLast>
          <LastTable
            name={"Nombre"}
            lastItemId={lastProduct?._id}
            lastItemInfo={lastProduct?.name}
          />
        </EachLastContainer>
        <EachLastContainer>
          <TitleLast>Ultimo Usuario</TitleLast>
          <LastTable
            name={"Nombre"}
            lastItemId={lastUser?._id}
            lastItemInfo={lastUser?.firstName + " " + lastUser?.lastName}
          />
        </EachLastContainer>
        <EachLastContainer>
          <TitleLast>Ultima Orden</TitleLast>
          <LastTable
            name={"Monto"}
            lastItemId={lastOrder?._id}
            lastItemInfo={lastOrder?.priceAmount}
          />
        </EachLastContainer>
      </LastContainer>
    </>
  );
};

export { Last };

import React, { useContext } from "react";
import styled from "styled-components";
import { BackOfficeContext } from "../../../context/back office/BackOfficeContext";

const ContainerOrders = styled.div`
  position: relative;
  margin: 2rem;
  margin-bottom: 4rem;
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

    p:nth-child(odd) {
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
      "g  h";
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    grid-template-areas:
      "a  b  c"
      "d  e  f"
      "g  h  h";
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    grid-template-areas:
      "a  b  c d"
      "e  f  g h";
  }

  // X-Large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    grid-template-areas:
      "a  b  c  d  e"
      "f  g  g  h  h";
  }

  // XX-Large devices (larger desktops, 1400px and up)
  @media (min-width: 1400px) {
    grid-template-areas: "a  b  c  d  e  f  g  h";
  }
`;

const OrdersContainer = styled.div`
  max-height: 40rem;
  overflow-y: auto;
`;

const DeleteDiv = styled.div`
  @media (min-width: 576px) {
    grid-area: h;
  }
`;

const EditDiv = styled.div`
  @media (min-width: 1200px) {
    grid-area: g;
  }
`;

const TitleNoOrdersFound = styled.h5`
  text-align: center;
  font-size: 23px;
`;

const BackOrders = () => {
  const { orders, deleteOrder } = useContext(BackOfficeContext);

  console.log({ orders });
  return (
    <ContainerOrders>
      <Title>Ordenes</Title>
      {orders.length > 0 ? (
        <OrdersContainer>
          {orders.map((order) => {
            const date = new Date(order.date);
            return (
              <InfoGrid key={order._id}>
                <div>
                  <p>ID</p>
                  <p>{order._id}</p>
                </div>
                <div>
                  <p>Comprador</p>
                  <p>
                    {order.user[0]?.firstName} {order.user[0]?.lastName}
                  </p>
                  <p>Envio</p>
                  <p>{order.shippingAddress}</p>
                </div>
                <div>
                  <p>Cantidad</p>
                  <p>{order.amount}</p>
                </div>
                <div>
                  <p>Total</p>
                  <p>${order.priceAmount} </p>
                </div>
                <div>
                  <p>Estatus</p>
                  <p>{order.status} </p>
                </div>
                <div>
                  <p>Fecha</p>
                  <p>{date.toUTCString()} </p>
                </div>
                <EditDiv>Editar</EditDiv>
                <DeleteDiv
                  onClick={() => {
                    if (
                      confirm("Are you sure you want to delete this order?")
                    ) {
                      deleteOrder(order._id);
                    }
                  }}
                >
                  Borrar
                </DeleteDiv>
              </InfoGrid>
            );
          })}
        </OrdersContainer>
      ) : (
        <TitleNoOrdersFound>No Orders Found</TitleNoOrdersFound>
      )}
    </ContainerOrders>
  );
};

export { BackOrders };

import React, { useEffect, useState } from "react";
import axios from "axios";

const PayPalButton = () => {
  const user = {
    userId: "uno",
    firstName: "Alejandro",
    lastName: "Senger",
    email: "Alex.senger@hotmail.com",
    address: "sweet home Nº777",
    isAdmin: false,
  };

  const order = {
    orderId: "unaordenñldkfjdklj",
    user: "uno",
    status: {
      name: "pending",
    },
    products: "acá quizá mande los productos",
    amount: 10,
    itemsQ: "Y acá que viene???",
    shippingAddress: "sweet home Nº 777",
    comments: "Leave a comment here",
    billingAddress: "Esto tampoco se que es :/",
    date: "Una fecha",
    models: "Para el pago esto no me interesa hasta nuevo aviso...",
    withShorts: true,
    withSockets: true,
    players: [1, 2, 3, 4, 5],
  };
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return axios
            .post("http://localhost:3000/api/v1/payments/create-payment", {
              orderId: order.orderId
            })
            .then((response) => {
              console.log({ response });
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: `${response.data}`,
                    },
                  },
                ],
              });
            })
            .catch((err) => {
              console.log(err);
              setOrderDetails(err);
            });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(function (paymentData) {
            axios
              .post("http://localhost:3000/api/v1/payments/success", {paymentData, orderId: order.orderId})
              .then((res) => {
                console.log(res.data);
                setOrderDetails(res.data);
              })
              .catch((err) => {
                console.error(err);
              });
          });
        },
      })
      .render("#paypal-button-container");
  }, [orderDetails]);

  return (
    <>
      <div id="paypal-button-container"></div>
      <div>
        <h3>Detalles del pedido</h3>
        <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
      </div>
    </>
  );
};

export default PayPalButton;

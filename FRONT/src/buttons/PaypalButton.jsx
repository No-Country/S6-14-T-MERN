import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

const PayPalButton = () => {
  const orderId = "63e5b23cb2e048edc3b67030";

  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return axios
            .get(
              `http://localhost:3000/api/v1/payments/create-payment/${orderId}`
            )
            .then((response) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: `${response.data.data}`,
                    },
                  },
                ],
              });
            })
            .catch((err) => {
              setOrderDetails(err.response.data);
            });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(function (paymentData) {
            axios
              .post(
                `http://localhost:3000/api/v1/payments/success/${orderId}`,
                { paymentData }
              )
              .then((res) => {
                setOrderDetails(res.data);
              })
          });
        },
      })
      .render("#paypal-button-container");
  }, []);

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

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PayPalButton = () => {
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: "1",
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(function (orderData) {
            axios.post('http://localhost:3000/api/v1/payments', orderData)
              .then(res => {
                console.log(res.data);
                setOrderDetails(res.data);
              })
              .catch(err => {
                console.error(err);
              });
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

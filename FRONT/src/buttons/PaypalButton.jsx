import React, { useEffect, useState, useMemo } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const initialOptions = {
  currency: "USD",
};
const PayPalButton = () => {
  const orderId = "63e5b15bb2e048edc3b6702c";
  const [orderDetails, setOrderDetails] = useState({});

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          createOrder={(data, actions) => {
            return axios
              .get(`${API_URL}/payments/create-payment/${orderId}`)
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
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (paymentData) {
              axios
                .post(`${API_URL}/payments/success/${orderId}`, { paymentData })
                .then((res) => {
                  setOrderDetails(res.data);
                });
            });
          }}
        />
      </PayPalScriptProvider>
      <div>
        <h3>Detalles del pedido</h3>
        <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
      </div>
    </>
  );
};

export default PayPalButton;

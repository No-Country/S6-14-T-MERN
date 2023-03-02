import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const initialOptions = {
  currency: "USD",
  vault: true,
  "client-id":
  "AVuPxblQAdI7BBhGEi9QIl2XI9JI-Nao8UZ0EFAsxEJCI-kg5o_TAH7dCsDDG7a8VskedSLNfmi50U-v"
}

const PayPalButton = ({ id }) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const orderId = params.get('id') || id;

  const navigate = useNavigate();

  return (
    <>
      <PayPalScriptProvider
        options={initialOptions}
      >
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
                console.log({ err });
              });
          }}
          onApprove={async function (data, actions) {
            return actions.order.capture().then(function (paymentData) {
              axios
                .post(`${API_URL}/payments/success/${orderId}`, { paymentData })
                .then((res) => {
                  navigate("/profile");
                })
                .catch((err) => console.log({err}))
            });
          }}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default PayPalButton;

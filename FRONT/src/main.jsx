import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles";
import { App } from "./routes/App";
import { CartProvider } from "./context/cart/CartProvider";
import { UserProvider } from "./context/user/UserProvider";
import { OrderProvider } from "./context/order/OrderProvider";
import { BackOfficeProvider } from "./context/back office/BackOfficeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <OrderProvider>
          <BackOfficeProvider>
            <GlobalStyles />
            <App />
          </BackOfficeProvider>
        </OrderProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>
);

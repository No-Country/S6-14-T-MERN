import React from "react";
import { PlayersSet, ShippingInfo } from "../../components/export";
import TotalCompra from "../../components/orders/totalCompra";

const OrderPage = () => {
  return (
    <main>
      <TotalCompra />
      <PlayersSet />
      <ShippingInfo />
    </main>
  );
};

export { OrderPage };

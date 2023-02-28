import TotalCompra from "../../components/orders/TotalCompra";
import PayPalButton from "../../buttons/PaypalButton";

const Payments = () => {
  return (
    <main>
      <TotalCompra />
      <PayPalButton />
    </main>
  );
};

export { Payments };

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PayPalButton from "./../buttons/PaypalButton";
import {
  Layout,
  Home,
  Login,
  Error,
  Register,
  PurchaseDetails,
} from "../pages/export";
import { CustomProducts, Colors } from "../components/export";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="payments" element={<PayPalButton />} />
            <Route path="purchase" element={<PurchaseDetails />} />
            <Route path="*" element={<Error />} />
            <Route path="diseñador" element={<CustomProducts />} />
            <Route path="color" element={<Colors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };

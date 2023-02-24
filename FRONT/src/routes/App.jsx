import { BrowserRouter, Routes, Route } from "react-router-dom";
import PayPalButton from "./../buttons/PaypalButton";
import { OrderPage, ErrorPage, HomePage, LayoutPages, LoginPage } from "../pages/export";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPages/>}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="payments" element={<PayPalButton />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };

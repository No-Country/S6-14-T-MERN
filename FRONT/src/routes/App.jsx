import { BrowserRouter, Routes, Route } from "react-router-dom";
import PayPalButton from "./../buttons/PaypalButton";
import { Layout, Home, Login, Error } from "../pages/export";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import Orders from "../components/orders/Orders";

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="payments" element={<PayPalButton />} />
            <Route path="*" element={<Error />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export { App }

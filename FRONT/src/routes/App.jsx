import { BrowserRouter, Routes, Route } from "react-router-dom";
import PayPalButton from "./../buttons/PaypalButton";
import {
  LayoutPages,
  HomePage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  ErrorPage,
  OrderPage,
  BackOfficePage,
} from "../pages/export";
import { CustomProducts, Colors } from "../components/export";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import { UserRouteProtected, UserRouteRedirect, UserAdminProtected } from "./export";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPages />}>
            <Route index element={<HomePage />} />
            <Route path="payments" element={<PayPalButton />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="diseñador" element={<CustomProducts />} />
            <Route path="color" element={<Colors />} />
            <Route path="*" element={<ErrorPage />} />
            <Route element={<UserRouteRedirect />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route element={<UserRouteProtected />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route element={<UserAdminProtected />}>
                <Route path="back-office" element={<BackOfficePage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };

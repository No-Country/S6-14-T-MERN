import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LayoutPages,
  HomePage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  ErrorPage,
  OrderPage,
  // BackOfficePage,
  Payments,
  RecoveryPassword
} from "../pages/export";
import { CustomProducts, Colors, Spinner } from "../components/export";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import {
  UserRouteProtected,
  UserRouteRedirect,
  UserAdminProtected,
} from "./export";
import { lazy, Suspense } from "react";

// const BackOfficeLazy = lazy(() =>
//   import("../pages/back office/BackOfficePage")
// );

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPages />}>
            <Route index element={<HomePage />} />
            <Route path='recovery-password' element={<RecoveryPassword /> } />
            <Route path='*' element={<ErrorPage />} />
            <Route path="payments" element={<Payments />} />
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
              {/* <Route element={<UserAdminProtected />}>
                <Route path="back-office" element={<BackOfficePage />} />
              </Route> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

// const BackOfficePage = () => (
//   <Suspense fallback={<Spinner />}>
//     <BackOfficeLazy />
//   </Suspense>
// );

export { App };

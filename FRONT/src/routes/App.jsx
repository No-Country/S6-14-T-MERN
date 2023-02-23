<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PayPalButton from "./../buttons/PaypalButton";
import { Layout, Home, Login, Error, Register } from "../pages/export";
import { CustomProducts, Footer } from '../components/export'
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PayPalButton from './../buttons/PaypalButton'
import {
  LayoutPages,
  HomePage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  ErrorPage,
  OrderPage
} from '../pages/export'
import { CustomProducts, Colors } from '../components/export'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
>>>>>>> dev

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="payments" element={<PayPalButton />} />
            <Route path="*" element={<Error />} />
             <Route path='diseñador' element={<CustomProducts />} />
=======
          <Route path='/' element={<LayoutPages />}>
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='payments' element={<PayPalButton />} />
            <Route path='order' element={<OrderPage />} />
            <Route path='diseñador' element={<CustomProducts />} />
            <Route path='color' element={<Colors />} />
            <Route path='*' element={<ErrorPage />} />
>>>>>>> dev
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export { App }

<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PayPalButton from "./../buttons/PaypalButton";
import { Layout, Home, Login, Error } from "../pages/export";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PayPalButton from './../buttons/PaypalButton'
import { Layout, Home, Login, Error } from '../pages/export'
import { Register } from '../pages/register/Register'
>>>>>>> registrar-usuario

const App = () => {
  const initialState = useInitialState();
  return (
<<<<<<< HEAD
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="payments" element={<PayPalButton />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
=======
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='payments' element={<PayPalButton />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
>>>>>>> registrar-usuario

export { App };

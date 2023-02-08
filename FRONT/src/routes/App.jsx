import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PayPalButton from './../buttons/PaypalButton';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1> HELLO WORLD</h1>} />
        <Route path="/payments" element={<PayPalButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };

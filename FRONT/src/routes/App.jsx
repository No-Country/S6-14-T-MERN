import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1> HELLO WORLD</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };

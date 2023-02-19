import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PayPalButton from './../buttons/PaypalButton'
import { Layout, Home, Login, Error } from '../pages/export'
import { CustomProducts } from '../components/export'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='payments' element={<PayPalButton />} />
          <Route path='*' element={<Error />} />
          <Route path='diseñador' element={<CustomProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { App }

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutPages, HomePage, LoginPage, RegisterPage, ProfilePage, RecoveryPassword, ErrorPage, OrderPage, PaymentsPage, HombrePage, MujerPage, MayoristaPage } from '../pages/export'
import { CustomProducts, Colors, Spinner } from '../components/export'
import { UserRouteProtected, UserRouteRedirect, UserAdminProtected } from './export'
import { lazy, Suspense } from 'react'
import { Woman } from '../Woman/Woman'
import { CartPage } from '../pages/cart/CartPage'

const BackOfficeLazy = lazy(() =>
  import('../pages/back office/BackOfficePage')
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPages />}>
          <Route index element={<HomePage />} />
          <Route path='payments' element={<PaymentsPage />} />
          <Route path='hombre' element={<HombrePage />} />
          {/* <Route path='mujer' element={<MujerPage />} /> */}
          <Route path='mayorista' element={<MayoristaPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='order' element={<OrderPage />} />
          <Route path='mujer' element={<Woman />} />
          <Route path='diseñador' element={<CustomProducts />} />
          <Route path='color' element={<Colors />} />
          <Route path='recovery' element={<RecoveryPassword />} />
          <Route path='*' element={<ErrorPage />} />
          <Route element={<UserRouteRedirect />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
          </Route>
          <Route element={<UserRouteProtected />}>
            <Route path='profile' element={<ProfilePage />} />
            <Route element={<UserAdminProtected />}>
              <Route path='back-office' element={<BackOfficePage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const BackOfficePage = () => (
  <Suspense fallback={<Spinner />}>
    <BackOfficeLazy />
  </Suspense>
)

export { App }

import { Outlet } from 'react-router-dom'
import { PreLoader, Header, Alert, Footer } from '../../components/export'

const LayoutPages = () => {
  return (
    <>
      <PreLoader />
      <Header />
      <Alert />
      <Outlet />
      <Footer />
    </>
  )
}

export { LayoutPages }

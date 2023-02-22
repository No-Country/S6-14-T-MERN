import { Outlet } from 'react-router-dom'
import { PreLoader, Header, Alert } from '../../components/export'

const Layout = () => {
  return (
    <>
      <PreLoader />
      <Header />
      <Alert />
      <Outlet />
      <footer>FOOTER</footer>
    </>
  )
}

export { Layout }

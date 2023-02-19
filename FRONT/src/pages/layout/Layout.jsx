import { Outlet } from 'react-router-dom'
import { Header } from '../../components/export'
import { Alert } from '../../components/alerts/alert'


const Layout = () => {
  return (
    <>
      <Header />
      <Alert />
      <Outlet />
      <footer>FOOTER</footer>
    </>
  )
}

export { Layout }

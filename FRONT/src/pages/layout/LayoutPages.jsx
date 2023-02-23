import { Outlet } from 'react-router-dom'
import { PreLoader, Header, Alert } from '../../components/export'

const LayoutPages = () => {
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

export { LayoutPages }

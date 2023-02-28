import { Outlet } from 'react-router-dom'
import { PreLoader, Header, Alert, Footer } from '../../components/export'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const LayoutPages = () => {
  return (
    <>
      <PreLoader />
      <Header />
      <Alert />
      <Outlet />
      <Footer />
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export { LayoutPages }

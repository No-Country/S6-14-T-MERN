import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>HEADER</header>
      <Outlet />
      <footer>FOOTER</footer>
    </>
  )
}

export { Layout }

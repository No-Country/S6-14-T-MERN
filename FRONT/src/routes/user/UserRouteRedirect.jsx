import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../context/user/UserContext'

const UserRouteRedirect = () => {
  const { user } = useContext(UserContext)

  if (user === false) return <h1>LOADING</h1>

  if (user) return <Navigate to='/profile' />

  return <Outlet />
}

export { UserRouteRedirect }

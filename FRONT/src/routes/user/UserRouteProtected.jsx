import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../context/user/UserContext'

const UserRouteProtected = () => {
  const { user } = useContext(UserContext)

  if (user === false) return <h1>LOADING</h1>

  if (user === null) return <Navigate to='/login' />

  return <Outlet />
}

export { UserRouteProtected }

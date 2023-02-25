import { useContext } from 'react'
import { UserContext } from '../../context/user/UserContext'

const IsLogged = ({ logged, notLogged }) => {
  const { user } = useContext(UserContext)

  if (user === false) return <h1>LOADING</h1>

  if (user === null) return notLogged

  return logged
}

export { IsLogged }

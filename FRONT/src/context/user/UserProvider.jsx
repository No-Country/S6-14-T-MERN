import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { UserContext } from './UserContext'

const HEADER_CONFIG = {
  baseURL: 'http://localhost:3000/api/v1',
  headers: { 'Content-Type': 'application/json' }
}

const HEADER_CONFIG_AUTHORIZATION = {
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies.get('token')}`
  }
}

const UserProvider = ({ children }) => {
  const [user, updateUser] = useState(false)

  const [userToken, updateUserToken] = useState(Cookies.get('token'))

  useEffect(() => {
    if (userToken) {
      getUser(userToken)
        .then((response) => updateUser(response.data.data.user))
    } else {
      updateUser(null)
    }
  }, [])

  const getUser = () => axios.get('users/me', HEADER_CONFIG_AUTHORIZATION)

  const createUserToken = (token) => updateUserToken(Cookies.set('token', token))

  const signIn = ({ email, password }) => {
    const user = { email, password }
    return axios.post('auth/login', user, HEADER_CONFIG)
  }

  const signInWithGoogle = () => console.log('inciando sesion con google')

  const signUp = ({ firstName, lastName, email, password }) => {
    const user = { firstName, lastName, email, password }
    return axios.post('users/create', user, HEADER_CONFIG)
  }

  const signUpWithGoogle = () => console.log('registrando con google')

  const signOut = () => console.log('cerrando sesion')

  const data = {
    user,
    updateUser,
    createUserToken,
    signIn,
    signInWithGoogle,
    signUp,
    signUpWithGoogle,
    signOut
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserProvider }

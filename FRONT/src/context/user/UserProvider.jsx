import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { UserContext } from './UserContext'

const HEADER_CONFIG = {
  baseURL: 'http://localhost:3000/api/v1',
  headers: { 'Content-Type': 'application/json' }
}

const UserProvider = ({ children }) => {
  const [user, updateUser] = useState(false)

  const [userToken, updateUserToken] = useState(Cookies.get('id'))

  useEffect(() => {
    if (userToken) {
      getUser(userToken)
        .then((user) => updateUser(user.data.data.user))
    } else {
      updateUser(null)
    }
  }, [userToken])

  const createUserToken = (token) => updateUserToken(Cookies.set('id', token))

  const getUser = (id) => {
    return axios.get(`users/${id}`, HEADER_CONFIG)
  }
  const signIn = (email, password) => console.log('inciando sesion')

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

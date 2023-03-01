import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { HEADER_CONFIG, HEADER_CONFIG_AUTHORIZATION } from '../../services/const'

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

  const removeUserToken = () => updateUserToken(Cookies.remove('token'))

  const signIn = ({ email, password }) => {
    const user = { email, password }
    return axios.post('auth/login', user, HEADER_CONFIG)
  }

  const signInWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`
  }

  const signUp = ({ username, firstName, lastName, address, email, password }) => {
    const user = { username, firstName, lastName, address, email, password }
    return axios.post('users/create', user, HEADER_CONFIG)
  }

  const signUpWithGoogle = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`
  }

  const signOut = () => {
    updateUser(null)
    removeUserToken()
  }

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

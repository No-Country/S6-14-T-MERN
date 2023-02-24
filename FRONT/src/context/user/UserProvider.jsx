// import Cookies from 'js-cookie'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { UserContext } from './UserContext'

const USER_ENDPOINT = 'http://localhost:3000/api/v1/users'

const UserProvider = ({ children }) => {
  const [user, updateUser] = useState(false)

  useEffect(() => {
    // const getUserToken = Cookies.get('token')
    // console.log(getUserToken)
  }, [])

  const signIn = (email, password) => console.log('inciando sesion')

  const signInWithGoogle = () => console.log('inciando sesion con google')

  const signUp = async ({ firstName, lastName, email, password }) => {
    const user = { firstName, lastName, email, password }
    try {
      const request = await axios.post(`${USER_ENDPOINT}/create`, user)
      console.log(request)
    } catch (error) {
      console.log(error)
    }
  }

  const signUpWithGoogle = () => console.log('registrando con google')

  const signOut = () => console.log('cerrando sesion')

  const data = {
    user,
    updateUser,
    signIn,
    signInWithGoogle,
    signUp,
    signUpWithGoogle,
    signOut
  }

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export { UserProvider }

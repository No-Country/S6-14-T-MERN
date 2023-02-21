const endPoints = {
  auth: {
    login: '/auth/login',
    logInGoogle: '/auth/google',
    signUp: '/users/create',
  },
  users: {
    getMyUser: '/users',
    getOne: (id) => `/users/${id}`,
  },
  products: {
    
  }
}

export default endPoints;
const endPoints = {
  auth: {
    login: '/auth/login',
    logInGoogle: '/auth/google/url',
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
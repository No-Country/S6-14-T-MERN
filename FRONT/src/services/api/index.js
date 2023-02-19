const endPoints = {
  auth: {
    login: '/auth/login',
    google: '/auth/google',
  },
  users: {
    getMyUser: '/users',
    getOne: (id) => `/users/${id}`,
  },
  products: {
    
  }
}

export default endPoints;
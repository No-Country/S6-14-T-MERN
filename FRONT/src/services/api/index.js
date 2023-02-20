const endPoints = {
  auth: {
    login: '/auth/login',
  },
  users: {
    getMyUser: '/users',
    getOne: (id) => `/users/${id}`,
  }
}

export default endPoints;
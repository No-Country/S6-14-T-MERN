const endPoints = {
  auth: {
    login: '/auth/login',
    logInGoogle: '/auth/google',
    signUp: '/users/create',
    recetPassword: '/auth/reset-password',
    sendRecoveryMail: '/auth/send-recovery',
  },
  users: {
    getMyUser: '/users',
    getOne: (id) => `/users/${id}`,
  },
  products: {
    
  }
}

export default endPoints;
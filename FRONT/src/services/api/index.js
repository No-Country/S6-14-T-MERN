const endPoints = {
  auth: {
    login: '/auth/login',
    logInGoogle: '/auth/google',
    signUp: '/users/create',
    sendRecoveryMail: '/auth/send-recovery',
    resetPassword: 'auth/reset-password',
  },
  users: {
    getMyUser: '/users',
    getOne: (id) => `/users/${id}`,
  },
  products: {
    
  }
}

export default endPoints;
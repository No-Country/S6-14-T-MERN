const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const usuario = {
  id: "asdñflkj145ñalkdj",
  name: "Alejandro",
  is_admin: true
}

const fackeUser = false

const user = usuario

const LocalStrategy = new Strategy({
  usernameField: 'email',
},
  async (email, password, done) => {
  console.log({user, email, password})
    
  try {
    //const user = await service.findByEmail(email);
    if(!user) {
        done(boom.unauthorized(), false);
    }
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   done(boom.unauthorized(), false);
    // }
    done(null, user);
    
  } catch (error) {
    done(error, false)
  }
});

module.exports = LocalStrategy;
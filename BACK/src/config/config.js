require('dotenv').config();
const mongoose = require('mongoose');

// const conectarDB = async () => {
//   try {
//       const db = await mongoose.connect(process.env.MONGO_URI, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true
//       });

//       const url = `${db.connection.host}:${db.connection.port}`
//       console.log(`MongoDB conectado en: ${url}`)
      
//   } catch (error) {
//       console.log(`error: ${error.message}`);
//       process.exit(1);
      
//   }
// };

// export default conectarDB


const strConn = process.env.MONGO_CONNECTION_STRING;

const connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(strConn, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        dbName: "test",
      });
  
      const url = `${conn.connection.host}:${conn.connection.port}`
          console.log(`MongoDB conectado en: ${url}`)
  } catch (error) {
    console.log(error)
    
  }

}
const config = {
  jwtSecret: process.env.JWT_SECRET,
  googleId: process.env.GOOGLE_CLIENT_ID,
  googleSecret: process.env.GOOGLE_CLIENT_SECRET,
  emailAccount: process.env.EMAIL_ACCOUNT,
  emailPass: process.env.EMAIL_PASS,
  frontDomain: process.env.FRONT_DOMAIN,
}





module.exports = { connectDB, config };
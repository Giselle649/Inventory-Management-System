const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.JWT_SECRET

// access token
const signToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY); //the argument of payload are usually id, role, name, or email 
};
  
const decode = (token) => {
    return jwt.verify(token, SECRET_KEY);
};
  
module.exports = {
    signToken,
    decode,
};

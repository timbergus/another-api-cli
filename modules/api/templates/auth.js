const jwt = require('jsonwebtoken');

const options = {
  issuer: 'demo',
  expiresIn: '30m'
};

const key = 'the demo secret key';

module.exports.mongo = {
  username: '',
  password: '',
  url: 'localhost',
  database: 'test'
};

module.exports.validate = function (token, callback) {
  jwt.verify(token, key, (error, decoded) => {
    if (error) {
      return callback(null, false);
    }
    return callback(null, true, decoded);
  });
};

module.exports.generateToken = function (username) {
  return new Promise((resolve, reject) => {
    jwt.sign({ username: username }, key, options, (error, token) => {
      if (error) {
        reject({ error: error.message });
      }
      resolve(token);
    });
  });
};

module.exports.verifyToken = function (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (error, decoded) => {
      if (error) {
        reject({ error: error.message });
      }
      resolve(decoded);
    });
  });
};

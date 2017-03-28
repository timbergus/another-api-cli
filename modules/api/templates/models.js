const Mongoose = require('mongoose');

const demoSchema = Mongoose.Schema({
  username: String,
  password: String
});

module.exports.User = Mongoose.model('user', demoSchema);

const Boom = require('boom');
const { parseBearer } = require('../utils');
const { generateToken, verifyToken } = require('../auth');

module.exports.getToken = function (request, reply) {
  generateToken(request.query.username).then(
    token => reply(token).code(200),
    () => reply(Boom.badImplementation())
  );
};

module.exports.verifyToken = function (request, reply) {
  verifyToken(parseBearer(request)).then(
    token => reply(token).code(200),
    () => reply(Boom.badImplementation())
  );
};

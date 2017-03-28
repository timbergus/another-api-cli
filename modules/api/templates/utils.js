module.exports.parseBearer = function (request) {
  return request.headers.authorization.split('Bearer ').pop() || null;
};

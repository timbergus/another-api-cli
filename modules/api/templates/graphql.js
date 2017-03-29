const { graphql } = require('graphql');
const { getSchema } = require('@risingstack/graffiti-mongoose');

const { User } = require('../ddbb/models');

const options = {
  mutation: true,
  allowMongoIDMutation: true
};

const schema = getSchema([User], options);

module.exports.graphqlHandler = (request, reply) => {
  const { query } = request.payload;
  graphql(schema, query).then(result => reply(result).code(200));
};

const Joi = require('joi');

const { getToken, verifyToken } = require('./handlers/token');

const home = function (request, reply) {
  reply('<h1>Template API</h1>');
};

const unauthoriced = {
  description: 'User not authorized',
  schema: Joi.object({
    statusCode: Joi.number().required().default(401),
    error: Joi.string().required().default('Unauthorized')
  }).label('Unauthorized')
};

module.exports.routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      auth: false,
      tags: ['api'],
      description: 'Get the home page of the application',
      notes: 'It is needed to check if the up is running in Heroku because you need a response in /.'
    },
    handler: home
  },
  {
    method: 'GET',
    path: '/token/get',
    config: {
      auth: false,
      tags: ['api'],
      description: 'Get a new token',
      notes: 'This is just a test route to create a token.',
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Token',
              schema: Joi.string().required()
            }
          },
          payloadType: 'string'
        }
      },
      validate: {
        query: Joi.object({
          username: Joi.string().required()
        })
      }
    },
    handler: getToken
  },
  {
    method: 'GET',
    path: '/token/verify',
    config: {
      auth: 'simple',
      tags: ['api'],
      description: 'Verify a token',
      notes: 'This is just a test route to verify a token. It is needed to pass the token in the header with a Bearer authentication.',
      plugins: {
        'hapi-swagger': {
          responses: {
            401: unauthoriced
          },
          payloadType: 'form'
        }
      },
      validate: {
        headers: Joi.object({
          authorization: Joi.string().required()
        }).options({ allowUnknown: true })
      }
    },
    handler: verifyToken
  }
];

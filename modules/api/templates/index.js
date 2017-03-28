const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Good = require('good');
const Inert = require('inert');
const Vision = require('vision');
const chalk = require('chalk');
const AuthBearer = require('hapi-auth-bearer-token');
const Pack = require('../package');
const Mongoose = require('mongoose');

const { routes } = require('./routes');
const { validate } = require('./auth');

const { mongo } = require('./auth');

if (mongo.username && mongo.password) {
  Mongoose.connect(`mongodb://${ mongo.username }:${ mongo.password }@${ mongo.url }/${ mongo.database }`);
} else {
  Mongoose.connect(`mongodb://${ mongo.url }/${ mongo.database }`);
}

const db = Mongoose.connection;

db.once('open', () => console.log(chalk.white.bgGreen('Mongo client connected!')));
db.on('error', error => console.log(chalk.white.bgRed('MongoDB error:'), error));

const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: parseInt(process.env.PORT, 10) || 1337,
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

const hapiSwaggerOptions = {
  info: {
    'title': 'Test API Documentation',
    'description': 'Move your app forward with the Uber API',
    'version': Pack.version,
    'contact': {
      'name': 'Gustavo Muñoz',
      'email': 'timbergus@gmail.com'
    }
  },
  'host': 'localhost:1337'
};

var goodOptions = {
  reporters: {
    console: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [
          {
            response: '*',
            log: '*'
          }
        ]
      },
      {
        module: 'good-console'
      },
      'stdout'
    ]
  }
};

server.register([
  AuthBearer,
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: hapiSwaggerOptions
  },
  {
    register: Good,
    options: goodOptions
  }
], error => {

  if (error) {
    throw error;
  }

  server.auth.strategy('simple', 'bearer-access-token', { validateFunc: validate });
  server.route(routes);

  server.start(err => {
    if (err) {
      throw err;
    }
    console.log(chalk.white.bgBlue(`Server running at: ${ server.info.uri }`));
  });
});

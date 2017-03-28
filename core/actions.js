// Actions is the firs step. It creates the main menu where you can select
// which project or element you want to create.

const { actionHandler } = require('./handlers');

module.exports.checkArgs = command => new Promise((resolve, reject) => {
  switch (command) {
    case 'api':
      actionHandler('api').then(
        response => resolve(response),
        error => reject(error)
      );
      break;
    default:
      reject('COMAND NOT FOUND');
      break;
  }
});

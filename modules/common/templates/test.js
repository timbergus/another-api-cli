const glob = require('glob');

console.log(`${ __dirname }/src/**/_test_`);

glob(`${ __dirname }/src/**/_test_`, (error, files) => {
  if (error) {
    throw error;
  }
  files.map(file => require(file));
});

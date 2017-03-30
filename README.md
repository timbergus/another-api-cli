# Another API CLI (APIC)

This is another API CLI to manage and create API projects using Node.js and Hapi, and using [inquirer.js](https://github.com/SBoudrias/Inquirer.js/) to ask questions to the user to configure the creation process.

All it's made using plain node without any kind of parser. So I'm still using `require` instead of `import`.

The API created has the following capabilities:

*   Security layer using JWT.
*   REST API layer using Hapi and Swagger.
*   JWT endpoint to return a token.
*   JWT endpoint to decode a token.
*   GraphQL endpoint over MongoDB.
*   A module to connect to MongoDB.
*   A module to connect to MySQL.
*   A module to connect to PostgreSQL.
*   A module to open web sockets.

The MongoDB, MySQL, PostgreSQL and web sockets modules are disabled by default. Right now the way to enable them is uncommented some lines inside the `index.js`. Please, read the comments inside this files to locate the lines.

To test the databases connections, install and run the databases you need, and use the configuration files inside the __config__ folder to define the connection parameters.

I'm going to add a multiple choices configuration step to enable or disable this capabilities when creating the project, instead modifying the `index.js` file, but this will be for future releases.

Meanwhile, have fun :)

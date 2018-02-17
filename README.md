# Another API CLI (APIC)

> ## This project has being __deprecated__ in favor of __[Fullstack CLI](https://www.npmjs.com/package/fullstack-cli)__ and it is no longer maintained. This new project covers both, the front and the back.

This is another API CLI to manage and create API projects using Node.js and Hapi, and using [inquirer.js](https://github.com/SBoudrias/Inquirer.js/) to ask questions to the user to configure the creation process.

All it's made using plain node without any kind of parser. So I'm still using `require` instead of `import`.

The new API, has the following capabilities:

*   Security layer using JWT.
*   REST API layer using Hapi and Swagger.
*   JWT endpoint to return a token.
*   JWT endpoint to decode a token.
*   GraphQL endpoint over MongoDB.
*   A module to connect to MongoDB.
*   A module to connect to MySQL.
*   A module to connect to PostgreSQL.
*   A module to open web sockets.

Just install the tool from [npm](https://www.npmjs.com/package/another-react-cli):

```bash
npm -g install another-api-cli
```

And execute in a terminal `apic`.

Then follow the steps to create you API.

To configure the databases connections, install and run the databases you need, and use the configuration files inside the __config__ folder to define the connection parameters.

The API will try to connect to your database, so if you don't configure the connection properly, it will throw an error.

Have fun :)

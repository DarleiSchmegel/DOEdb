const pg = require('pg');

export default async () => {

  const config = {
      host: '<your-db-server-name>.postgres.database.azure.com',
      // Do not hard code your username and password.
      // Consider using Node environment variables.
      user: '<your-db-username>',     
      password: '<your-password>',
      database: '<name-of-database>',
      port: 5432,
      ssl: true
  };
  
  const client = "Teste"//new pg.Client(config);
}





const { Client } = require('pg');

async function getConnection(){
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'mike',
    password: 'Passw0rd!',
    database: 'myStore'
  });

  await client.connect();
  return client;
}

module.exports = getConnection;

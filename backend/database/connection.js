const { Client } = require('pg');

exports.client = new Client({
  user: `${process.env.USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD_LOCAL}`,
  host: `${process.env.HOST_LOCAL}`,
  port: `${process.env.DATABASE_PORT_LOCAL}`,
  database: `${process.env.DATABASE_LOCAL}`,
});

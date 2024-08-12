const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const { client } = require('./database/connection');
client
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
  });


const app = require('./app');


const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`LISTEN ON PORT: ${port}!`);
});

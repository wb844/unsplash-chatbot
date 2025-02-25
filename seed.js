require('dotenv').config()

const { Client } = require('pg')
console.log(process.env.DATABASE_URL)
const pg = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pg.connect()

pg.query(`CREATE TABLE chatbot_token(token TEXT, expires_on NUMERIC); INSERT INTO chatbot_token (token, expires_on) VALUES ('', '1');`, (error, results) => {
  if (error) {
    console.log(error)
  } else {
    console.log(results)
  }
  pg.end()
})

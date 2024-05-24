require('dotenv').config({ path: './.env' })

module.exports = {
  env: {
    SESSION_TOKEN_NAME: process.env.SESSION_TOKEN_NAME
  }
}

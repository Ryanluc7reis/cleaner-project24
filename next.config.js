const { parsed: localEnv } = require('dotenv').config({
  path: './.env.local'
})

module.exports = {
  env: {
    SESSION_TOKEN_NAME: localEnv.SESSION_TOKEN_NAME
  }
}

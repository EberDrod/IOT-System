const debug = require('debug')('iot:api:db')

module.exports = {
    db: {
      database: process.env.DB_NAME || 'iotdb',
      username: process.env.DB_USER || 'iot',
      password: process.env.DB_PASS || 'iot',
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      logging: s => debug(s)
    }
  }
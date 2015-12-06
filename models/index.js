if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      logging: console.log
    })
  } else {
    // the application is executed on the local machine
    sequelize = new Sequelize("postgres://localhost/climbing_log")
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Climb:     sequelize.import(__dirname + '/climb') 
  }
}

module.exports = global.db

'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')
const setupAgent = require('./lib/agent')
const setupMetric = require('./lib/metric')
const defaults = require('defaults')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  // Se relacionan la db
  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)

  // Ejecutar nuestra Promise se usa Await por async / (.then)
  await sequelize.authenticate()

  // Si la configuracion de la DB existe, crear una nueva
  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Agent = setupAgent(AgentModel)
  const Metric = setupMetric(MetricModel, AgentModel)

  return {
    Agent,
    Metric
  }
}

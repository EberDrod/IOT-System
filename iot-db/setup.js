'use strict'

const debug = require('debug')('iotdb:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./')

const prompt = inquirer.createPromptModule()

async function setup () {
  // Usa inquirer para la confirmación con una simple pregunta
  const answer = await prompt([{
    type: 'confirm',
    name: 'setup',
    message: 'This will destroy your database, are you sure?'
  }

  ])

  if (!answer.setup) {
    return console.log('Nothing happened :) ')
  }

  const config = {
    database: process.env.DB_NAME || 'iotdb',
    username: process.env.DB_USER || 'iot',
    password: process.env.DB_PASS || 'iot',
    host: process.env.DB_Host || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true

  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()

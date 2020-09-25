//config obtem as informações do knexfile
const config = require('../knexfile.js')
//knex invoca o knex passando a config como parâmetro
const knex = require('knex')(config)

//carrega as migrates assim que executa o backend
knex.migrate.latest([config])

//module exports permite que utilizemos o knex no arquivo index.js
module.exports = knex
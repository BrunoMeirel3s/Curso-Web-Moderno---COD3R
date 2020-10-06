// Update with your config settings.
/**
 * Criado através do comando: knex init, este
 * arquivo recebe as configurações de acesso ao banco de
 * dados
 */
const {db} = require('./.env')
module.exports = {
    client: 'postgresql',
    connection: db,
    pool: {
      min: 2,
      max: 100,
      propagateCreateError: false
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};

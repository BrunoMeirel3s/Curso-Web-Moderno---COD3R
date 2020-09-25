// Update with your config settings.
/**
 * Criado através do comando: knex init, este
 * arquivo recebe as configurações de acesso ao banco de
 * dados
 */

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'knowledge',
      user:     'postgres',
      password: 'jair140514'
    },
    pool: {
      min: 2,
      max: 100,
      propagateCreateError: false
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};

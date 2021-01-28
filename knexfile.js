// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: '',
      user: 'postgres',
      password: 'jhonatan11'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },
};
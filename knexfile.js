// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'demo'
    },
    migrations: {
      tableName: 'migrations'
    }
  },
};

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './backend/data/sims-tracker.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './backend/data/migrations',
    },
    seeds: {
      directory: './backend/data/seeds',
    },
  },
};
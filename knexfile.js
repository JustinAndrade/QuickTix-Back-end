
// Update with your config settings.
require("dotenv").config();
const devConnection = process.env.DEV_DB;
const stage1 = process.env.STAGE1;
const stage2 = process.env.STAGE2;
const prod = process.env.PROD
const testing = process.env.DB_ENV;
const pg = require("pg");
pg.defaults.ssl = true;

module.exports = {
    development: {
        client: "sqlite3",
        connection: "./data/quicktix.db3",
        pool: {
            min: 2,
            max: 10
        },
        useNullAsDefault: true,
        migrations: {
            tableName: "knex_migrations",
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        }
    },
    testing: {
        client: "pg",
        connection: process.env.DB_ENV,
        useNullAsDefault: true,
        migrations: {
            directory: "./data/tests/migrations"
        },
        seeds: {
            directory: "./data/tests/seeds"
        }
    }
};
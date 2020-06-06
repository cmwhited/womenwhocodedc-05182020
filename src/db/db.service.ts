/* eslint-disable @typescript-eslint/camelcase */
import { Pool } from 'pg';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

let pool: Pool = null;

export const getDbPool = (): Pool => {
  if (pool != null) {
    return pool;
  }
  pool = new Pool({
    max: 5,
    min: 1,
    connectionTimeoutMillis: 20000,
    idleTimeoutMillis: 10000,
    user: DB_USERNAME,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: Number(DB_PORT),
    host: DB_HOST,
    keepAlive: true,
    query_timeout: 20000,
  });
  return pool;
};

export default {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  // @ts-ignore
  port: +process.env.PGPORT,
};

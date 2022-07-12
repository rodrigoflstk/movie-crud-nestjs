import { DataSource } from 'typeorm';
require('dotenv').config();

const host = process.env.IS_COMPOSE ? 'postgres' : 'localhost';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nico',
  password: 'postgres',
  database: 'my_db',
  entities: ['./src/movies/entities/*.entity.ts'],
  synchronize: false,
  migrations: ['./src/database/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source initialized');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

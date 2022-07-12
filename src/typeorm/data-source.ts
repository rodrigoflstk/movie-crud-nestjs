import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'movieapi',
  password: 'postgres',
  database: 'my_database',
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

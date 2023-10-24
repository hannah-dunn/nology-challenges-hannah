import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { LoadStrategy } from '@mikro-orm/core';
// import { config } from 'donenv';
// config();

const dbConfig: MikroOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  debug: true,
  entitiesTs: ['src/**/*.entity.ts'],
  entities: ['dist/**/*.entity.js'],
  loadStrategy: LoadStrategy.JOINED,
  migrations: {
    pathTs: 'src/migrations',
    path: 'dist/migrations',
  },
  seeder: {
    pathTs: 'src/seeders',
    path: 'dist/seeders',
  },
};

export default dbConfig;

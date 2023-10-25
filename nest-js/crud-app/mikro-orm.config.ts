import { LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import * as dotenv from 'dotenv';

dotenv.config();

const config: MikroOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  // port needs to be a number but environment variables are always strings
  port: Number(process.env.DB_PORT),
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

export default config;

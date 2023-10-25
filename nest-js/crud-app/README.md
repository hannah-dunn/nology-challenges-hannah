# Nest mikro-orm starter

This repository is an opinionated, pre configured Nest app using Mikro Orm. Support for migrations, seeding, and use of environment variables is already built in.

## **NOTE**

This app was built in October 2023, you may need to update versions in `package.json`

## Getting started

1. Clone the repository
2. Create a `.env` file and copy the contents of .env.example over
3. Replace relevant environment variables
4. (Optional) if using a package manager other than npm, delete pack-lock.json

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Migrations

```bash
# create initial migration
$ npx mikro-orm migration:create --initial

# create additional migration
$ npx mikro-orm migration:create

# move to latest migration
$ npm mikro-orm migration:up

# fresh migration and seed database
$ npx mikro-orm migration:fresh --seed
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

#### Challenge

Update the GET /pokemon endpoint to use query parameters

- Filter Pokemon by type (Query Parameter => e.g: myurl?type=steel) this would return all steel type
- Filter Pokemon by minHp (Query Parameter => e.g: myurl?minHp=10) this would return all pokemon with maxHp greater than or equal to 10
- We should be able to apply both filters (e.g: myurl?minHp=20&type=electric would return all pokemon that are electric and have a maxHp of 20 or more)

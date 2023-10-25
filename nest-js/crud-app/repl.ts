import { MikroORM } from '@mikro-orm/mysql';
import * as repl from 'repl';
import config from './mikro-orm.config';
import { Pokemon } from './src/pokemon/entities/pokemon.entity';
import { PokemonType } from './src/pokemon/entities/pokemon-type.entity';
const runRepl = async () => {
  const orm = await MikroORM.init(config);
  const em = orm.em.fork();

  const replServer = repl.start({
    prompt: 'mikro-orm-playground >',
    useColors: true,
  });

  replServer.context.em = em;
  replServer.context.Pokemon = em.getRepository(Pokemon);
  replServer.context.PokemonType = em.getRepository(PokemonType);
  console.log('REPL started');

  replServer.on('exit', async () => {
    await orm.close(true);
    console.log('Goodbye');
  });
};

runRepl().catch((e) => console.error(e));

import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Pokemon } from './pokemon.entity';

@Entity({ tableName: 'pokemon_types' })
export class PokemonType {
  @PrimaryKey()
  id: number;

  @Property({ unique: true })
  name: string;

  @ManyToMany(() => Pokemon, (pokemon) => pokemon.types, { owner: true })
  pokemon = new Collection<Pokemon>(this);
}

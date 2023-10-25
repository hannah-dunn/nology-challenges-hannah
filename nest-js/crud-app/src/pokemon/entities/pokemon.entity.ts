import {
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
  Collection,
} from '@mikro-orm/core';
import { PokemonType } from './pokemon-type.entity';

@Entity()
export class Pokemon {
  @PrimaryKey()
  id: number;

  @Property({ unique: true })
  name: string;

  @Property({ default: 1 })
  level: number;

  @Property()
  maxHp: number;

  @ManyToMany(() => PokemonType, (type) => type.pokemon)
  types = new Collection<PokemonType>(this);
}

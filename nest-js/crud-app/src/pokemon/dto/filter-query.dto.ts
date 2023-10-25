import { Transform } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Min } from 'class-validator';

enum PokemonType {
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  ICE = 'ice',
  FIGHTING = 'fighting',
  POSION = 'poison',
  GROUND = 'ground',
  FLYING = 'flying',
  PYSCHIC = 'pyschic',
  BUG = 'bug',
  ROCK = 'rock',
  GHOST = 'ghost',
  DARK = 'dark',
  DRAGON = 'dragon',
  STEEL = 'steel',
  FARIY = 'fairy',
}

export class FilterQueryDto {
  @IsOptional()
  @IsEnum(PokemonType)
  type: string;

  @IsOptional()
  @IsInt()
  @Min(5)
  @Transform(({ value }) => parseInt(value))
  minHp: number;
}

import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsInt,
  Min,
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';

// const pokemonTypes = [
//   'fire',
//   'water',
//   'grass',
//   'electric',
//   'ice',
//   'fighting',
//   'poison',
//   'ground',
//   'flying',
//   'pyschic',
//   'bug',
//   'rock',
//   'ghost',
//   'dark',
//   'dragon',
//   'steel',
//   'fairy',
// ];

// enum PokemonType {
//   FIRE = 'fire',
//   WATER = 'water',
//   GRASS = 'grass',
//   ELECTRIC = 'electric',
//   ICE = 'ice',
//   FIGHTING = 'fighting',
//   POSION = 'poison',
//   GROUND = 'ground',
//   FLYING = 'flying',
//   PYSCHIC = 'pyschic',
//   BUG = 'bug',
//   ROCK = 'rock',
//   GHOST = 'ghost',
//   DARK = 'dark',
//   DRAGON = 'dragon',
//   STEEL = 'steel',
//   FARIY = 'fairy',
// }

export class CreatePokemonDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  @IsInt({ each: true })
  typeIds: number[];

  @IsOptional()
  @IsInt()
  @Min(1)
  level: number;

  @IsInt()
  @Min(5)
  maxHp: number;
}

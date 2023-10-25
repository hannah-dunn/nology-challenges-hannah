import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

export class UpdatePokemonDTO extends PartialType(CreatePokemonDto) {}

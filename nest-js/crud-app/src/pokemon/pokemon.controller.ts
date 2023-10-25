import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
  Patch,
  Delete,
  HttpCode,
  BadRequestException,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { UpdatePokemonDTO } from './dto/update-pokemon.dto';
import { PokemonTypeService } from './pokemon-type.service';
import { PokemonType } from './entities/pokemon-type.entity';

@Controller('/pokemon')
export class PokemonController {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly pokemonTypeService: PokemonTypeService,
  ) {}

  @Post()
  async create(@Body() data: CreatePokemonDto): Promise<Pokemon> {
    return await this.pokemonService.create(data);
  }

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonService.findAll();
  }

  @Get('/types')
  async findAllTypes(): Promise<PokemonType[]> {
    return await this.pokemonTypeService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id', ParseIntPipe) idParam: number): Promise<Pokemon> {
    const foundPokemon = await this.pokemonService.findById(id);
    if (!foundPokemon) {
      throw new NotFoundException('Could not find pokemon with id ' + id);
    }
    return foundPokemon;

    // try {
    //   return await this.pokemonService.findById(id);
    // } catch {
    //   throw new NotFoundException('Could not find pokemon by id ' + id);
    // }
  }

  @Patch('/:id')
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePokemonDTO,
  ): Promise<string> {
    if (Object.keys(data).length < 1) {
      throw new BadRequestException('Must update something');
    }

    const updatedPokemon = await this.pokemonService.updateById(id, data);
    if (!updatedPokemon) {
      throw new NotFoundException('Could not find pokemon with id ' + id);
    }
    return updatedPokemon;
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const isDeleted = await this.pokemonService.deleteById(id);
    if (!isDeleted) {
      throw new NotFoundException('Could not find pokemon with id ' + id);
    }
  }
}

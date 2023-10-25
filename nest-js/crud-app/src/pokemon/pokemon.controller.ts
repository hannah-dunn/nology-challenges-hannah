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
  Query,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { UpdatePokemonDTO } from './dto/update-pokemon.dto';
import { PokemonTypeService } from './pokemon-type.service';
import { PokemonType } from './entities/pokemon-type.entity';
import { FilterQueryDto } from './dto/filter-query.dto';

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
  async findAll(@Query() queryParams: FilterQueryDto): Promise<Pokemon[]> {
    if (Object.keys(queryParams).length === 0) {
      return await this.pokemonService.findAll();
    }
    return await this.pokemonService.findAllByQuery(queryParams);
  }

  @Get('/types')
  async findAllTypes(): Promise<PokemonType[]> {
    return await this.pokemonTypeService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Pokemon> {
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
  ): Promise<Pokemon> {
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

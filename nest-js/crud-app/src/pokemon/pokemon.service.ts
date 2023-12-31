import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Pokemon } from './entities/pokemon.entity';
import { EntityRepository } from '@mikro-orm/mysql';
import { plainToInstance } from 'class-transformer';
import { UpdatePokemonDTO } from './dto/update-pokemon.dto';
import { wrap } from '@mikro-orm/core';
import { PokemonTypeService } from './pokemon-type.service';
import { FilterQueryDto } from './dto/filter-query.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: EntityRepository<Pokemon>,
    private readonly pokemonTypeService: PokemonTypeService,
  ) {}

  async create(data: CreatePokemonDto): Promise<Pokemon> {
    const { typeIds, ...rest } = data;
    const newPokemon = plainToInstance(Pokemon, data);
    const types = await this.pokemonTypeService.findByIdArray(typeIds);
    newPokemon.types.add(types);
    this.pokemonRepository.create(newPokemon);
    await this.pokemonRepository.getEntityManager().persistAndFlush(newPokemon);
    return newPokemon;
  }

  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonRepository.findAll({
      populate: ['types', 'types.name'],
    });
  }

  async findById(id: number): Promise<Pokemon | null> {
    const foundPokemon = await this.pokemonRepository.findOne(
      { id },
      { populate: ['types'] },
    );
    return foundPokemon;
    // return this.pokemonRepository.findOneOrFail({ id });
  }

  async updateById(
    id: number,
    data: UpdatePokemonDTO,
  ): Promise<Pokemon | null> {
    const foundPokemon = await this.findById(id);
    if (!foundPokemon) {
      return null;
    }
    wrap(foundPokemon).assign(data);
    await this.pokemonRepository.getEntityManager().flush();
    return foundPokemon;
  }

  async deleteById(id: number): Promise<boolean> {
    const number = await this.pokemonRepository.nativeDelete({ id });
    return !!number;
  }

  //mine
  // async filterPokemon(data: CreatePokemonDto): Promise<Pokemon | null> {
  //   const { typeIds } = CreatePokemonDto;
  // }

  async findAllByQuery(queryParams: FilterQueryDto) {
    const { type, minHp = 5 } = queryParams;
    if (!type) {
      return await this.pokemonRepository.find({ maxHp: { $gte: minHp } });
    }
    const pokemonType = await this.pokemonTypeService.findOneByName(type);
    if (!pokemonType) {
      return [];
    }
    return await this.pokemonRepository.find({
      $and: [{ types: pokemonType }, { maxHp: { $gte: minHp } }],
    });
  }
}

import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { PokemonType } from './entities/pokemon-type.entity';
import { EntityRepository } from '@mikro-orm/mysql';

@Injectable()
export class PokemonTypeService {
  constructor(
    @InjectRepository(PokemonType)
    private readonly pokemonTypeRespository: EntityRepository<PokemonType>,
  ) {}
  async findAll() {
    return await this.pokemonTypeRespository.findAll({ orderBy: [{ id: 1 }] });
  }

  async findByIdArray(ids: number[]) {
    return this.pokemonTypeRespository.find({ id: { $in: ids } });
  }
}

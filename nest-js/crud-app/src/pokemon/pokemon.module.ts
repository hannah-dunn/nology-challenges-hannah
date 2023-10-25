import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonType } from './entities/pokemon-type.entity';
import { PokemonTypeService } from './pokemon-type.service';

@Module({
  imports: [MikroOrmModule.forFeature([Pokemon, PokemonType])],
  controllers: [PokemonController],
  providers: [PokemonService, PokemonTypeService],
})
export class PokemonModule {}

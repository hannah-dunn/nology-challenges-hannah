import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}

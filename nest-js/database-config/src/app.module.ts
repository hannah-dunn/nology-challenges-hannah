import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DogsModule } from './dogs/dogs.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    ConfigModule.forRoot({ cache: true }),
    DogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

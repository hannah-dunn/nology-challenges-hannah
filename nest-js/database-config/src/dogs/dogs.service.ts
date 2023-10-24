import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class DogsService {
  constructor(private readonly ConfigService: ConfigService) {}

  secret() {
    return this.ConfigService.get<string>('SECRET_DOG_NAME');
  }

  create(createDogDto: CreateDogDto) {
    return 'This action adds a new dog';
  }

  findAll() {
    return `This action returns all dogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}

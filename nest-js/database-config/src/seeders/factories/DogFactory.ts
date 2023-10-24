import { Factory, Faker } from '@mikro-orm/seeder';
import { Dog } from '../../dogs/entities/dog.entity';

export class DogFactory extends Factory<Dog> {
  model = Dog;

  definition(faker: Faker): Partial<Dog> {
    return {
      name: faker.name.firstName(),
      age: faker.datatype.number({ min: 1, max: 15 }),
      breed: faker.animal.dog(),
    };
  }
}

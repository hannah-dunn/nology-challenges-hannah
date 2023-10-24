import { Migration } from '@mikro-orm/migrations';

export class Migration20231023225901 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table `dogs` add `age` int not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `dogs` drop `age`;');
  }
}

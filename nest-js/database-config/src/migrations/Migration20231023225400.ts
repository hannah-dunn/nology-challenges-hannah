import { Migration } from '@mikro-orm/migrations';

export class Migration20231023225400 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `dogs` (`id` int unsigned not null auto_increment primary key, `breed` varchar(255) not null, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;',
    );
  }
}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateIbgeTable1673560716474 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ibge',
        columns: [
          {
            name: 'id',
            type: 'int',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ibge');
  }
}

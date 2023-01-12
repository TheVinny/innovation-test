import { IIbgeMapped } from '@modules/Ibge/domain/interfaces/IIbgeMapped';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ibge')
class Ibge implements IIbgeMapped {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  nome: string;
}

export default Ibge;

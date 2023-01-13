import { EntityRepository, getRepository, Repository } from 'typeorm';
import Ibge from '../entities/Ibge';
import { IIbgeMapped } from '@modules/Ibge/domain/interfaces/IIbgeMapped';
import { IIbgeRepository } from '@modules/Ibge/domain/interfaces/IIbgeRepository';

@EntityRepository(Ibge)
export default class IbgeRepository implements IIbgeRepository {
  private repository: Repository<Ibge>;
  constructor() {
    this.repository = getRepository(Ibge);
  }

  async verify(): Promise<IIbgeMapped[]> {
    const ibge = await this.repository.find();
    return ibge;
  }

  async save(ibge: IIbgeMapped[]): Promise<void> {
    const ibgeSave = await this.repository.create(ibge);

    await this.repository.save(ibgeSave);
  }
}

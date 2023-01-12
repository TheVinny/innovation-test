import { IIbgeMapped } from './IIbgeMapped';

export interface IIbgeRepository {
  verify(): Promise<IIbgeMapped[]>;
  save(ibge: IIbgeMapped[]): Promise<void>;
}

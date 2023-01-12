import { IbgeApi } from '@shared/infra/http/Api/IbgeApi';
import { inject, injectable } from 'tsyringe';
import { IbgeApiResponse } from '../domain/interfaces/IbgeApiResponse';
import { IIbgeMapped } from '../domain/interfaces/IIbgeMapped';
import { IIbgeRepository } from '../domain/interfaces/IIbgeRepository';
import IbgeMapper from '../utils/IbgeMapper';

@injectable()
class IbgeService {
  constructor(
    @inject('IbgeRepository')
    private ibgeRepository: IIbgeRepository,
  ) {}

  async execute(): Promise<IIbgeMapped[]> {
    const ibge = await this.ibgeRepository.verify();

    if (!ibge.length) {
      const municipios = await IbgeApi.get<IbgeApiResponse[]>('/');

      const municipiosSerialized: IIbgeMapped[] = IbgeMapper.execute(
        municipios.data,
      );

      await this.ibgeRepository.save(municipiosSerialized);
    }

    return ibge;
  }
}

export default IbgeService;

import { IbgeApiResponse } from '../domain/interfaces/IbgeApiResponse';

class IbgeMapper {
  execute(ibgeResponse: IbgeApiResponse[]) {
    return ibgeResponse.map(({ nome, id }) => ({
      id,
      nome,
    }));
  }
}

export default new IbgeMapper();

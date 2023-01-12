import IbgeService from '@modules/Ibge/Services/IbgeService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class GetMunicipiosRj {
  async execute(req: Request, res: Response): Promise<Response> {
    const getProduct = container.resolve(IbgeService);

    const municipios = await getProduct.execute();

    return res.status(200).json(municipios);
  }
}

export default new GetMunicipiosRj();

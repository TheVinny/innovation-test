import GetByIdProductService from '@modules/products/services/GetByIdProductService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class GetByIdProductController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getProduct = container.resolve(GetByIdProductService);

    const product = await getProduct.execute(id);

    return res.status(200).json(product);
  }
}

export default new GetByIdProductController();

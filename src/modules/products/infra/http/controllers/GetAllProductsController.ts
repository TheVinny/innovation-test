import GetAllProductService from '@modules/products/services/GetAllProductService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class GetAllProductController {
  async execute(req: Request, res: Response): Promise<Response> {
    const getProduct = container.resolve(GetAllProductService);

    const products = await getProduct.execute();

    return res.status(200).json(products);
  }
}

export default new GetAllProductController();

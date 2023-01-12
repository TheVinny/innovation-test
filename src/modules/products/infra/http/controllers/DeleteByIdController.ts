import DeleteByIdService from '@modules/products/services/DeleteByIdService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class DeleteByIdProductController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getProduct = container.resolve(DeleteByIdService);

    const product = await getProduct.execute(id);

    return res.status(200).json(product);
  }
}

export default new DeleteByIdProductController();

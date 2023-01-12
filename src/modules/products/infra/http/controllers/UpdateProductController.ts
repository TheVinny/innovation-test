import UpdateProductService from '@modules/products/services/UpdateByIdService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class UpdateProductController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, quantity, category, status } = req.body;

    const updateProduct = container.resolve(UpdateProductService);

    const product = await updateProduct.execute({
      id,
      name,
      category,
      quantity,
      status,
    });

    return res.status(201).json(product);
  }
}

export default new UpdateProductController();

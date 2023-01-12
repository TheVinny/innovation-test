import CreateProductService from '@modules/products/services/CreateProductService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateProductController {
  async execute(req: Request, res: Response): Promise<Response> {
    const { name, quantity, category, status } = req.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      category,
      quantity,
      status,
    });

    return res.status(201).json(product);
  }
}

export default new CreateProductController();

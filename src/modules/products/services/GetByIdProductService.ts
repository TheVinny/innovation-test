import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IProduct } from '../domain/interfaces/IProduct';
import { IProductRepository } from '../domain/interfaces/IProductRepository';

@injectable()
class GetByIdProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}
  async execute(id: string): Promise<IProduct> {
    const product = await this.productRepository.findById(id);

    if (!product) throw new AppError('product not found', 404);

    return product;
  }
}

export default GetByIdProductService;

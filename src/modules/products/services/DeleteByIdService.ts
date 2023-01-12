import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IProduct } from '../domain/interfaces/IProduct';
import { IProductRepository } from '../domain/interfaces/IProductRepository';

@injectable()
class DeleteByIdService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}
  async execute(id: string): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!product) throw new AppError('product not found', 404);

    await this.productRepository.deleteById(product);
  }
}

export default DeleteByIdService;

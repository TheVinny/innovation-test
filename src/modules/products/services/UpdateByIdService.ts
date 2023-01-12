import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IProduct } from '../domain/interfaces/IProduct';
import { IProductRepository } from '../domain/interfaces/IProductRepository';
import { IUpdateProduct } from '../domain/interfaces/IUpdateProduct';

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}
  async execute({
    id,
    name,
    category,
    quantity,
    status,
  }: IUpdateProduct): Promise<IProduct> {
    const product = await this.productRepository.findById(id);

    if (!product) throw new AppError('Product not found');

    const hasProductName = await this.productRepository.findByName(name);

    if (hasProductName && hasProductName.id !== id)
      throw new AppError('Already exists product name', 409);

    const updated = await this.productRepository.update({
      product,
      name,
      category,
      quantity,
      status,
    });

    return updated;
  }
}

export default UpdateProductService;

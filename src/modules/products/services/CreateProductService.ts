import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateProduct } from '../domain/interfaces/ICreateProduct';
import { IProduct } from '../domain/interfaces/IProduct';
import { IProductRepository } from '../domain/interfaces/IProductRepository';

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}
  async execute({
    name,
    category,
    quantity,
    status,
  }: ICreateProduct): Promise<IProduct> {
    const hasProduct = await this.productRepository.findByName(name);

    if (hasProduct) throw new AppError('Product already exists ');

    const created = await this.productRepository.save({
      name,
      category,
      quantity,
      status,
    });

    return created;
  }
}

export default CreateProductService;

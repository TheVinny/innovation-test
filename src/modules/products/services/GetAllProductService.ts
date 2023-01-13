import { inject, injectable } from 'tsyringe';
import { IProduct } from '../domain/interfaces/IProduct';
import { IProductRepository } from '../domain/interfaces/IProductRepository';

@injectable()
class GetAllProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}
  async execute(): Promise<IProduct[]> {
    const products = await this.productRepository.GetAll();
    return products;
  }
}

export default GetAllProductService;

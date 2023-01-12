import { EntityRepository, getRepository, Repository } from 'typeorm';
import Products from '@modules/products/infra/entities/Products';
import { IProduct } from '@modules/products/domain/interfaces/IProduct';
import { IProductRepository } from '@modules/products/domain/interfaces/IProductRepository';
import { ICreateProduct } from '@modules/products/domain/interfaces/ICreateProduct';
import { IUpdateProductSave } from '@modules/products/domain/interfaces/IUpdateProductSave';

@EntityRepository(Products)
export default class ProductRepository implements IProductRepository {
  private repository: Repository<Products>;
  constructor() {
    this.repository = getRepository(Products);
  }

  public async GetAll(): Promise<IProduct[]> {
    return await this.repository.find();
  }

  public async findById(id: string): Promise<IProduct | undefined> {
    const product = await this.repository.findOne(id);

    return product;
  }

  public async findByName(name: string): Promise<IProduct | undefined> {
    const product = await this.repository.findOne({
      where: {
        name,
      },
    });

    return product;
  }

  public async deleteById(product: IProduct): Promise<void> {
    await this.repository.remove(product);
  }

  public async save(product: ICreateProduct): Promise<IProduct> {
    const createProduct = this.repository.create(product);

    await this.repository.save(createProduct);

    return createProduct;
  }

  public async update({
    product,
    category,
    name,
    quantity,
    status,
  }: IUpdateProductSave): Promise<IProduct> {
    product.name = name || product.name;
    product.category = category || product.category;
    product.quantity = quantity || product.quantity;
    product.status = status || product.status;

    const updated = await this.repository.save(product);

    return updated;
  }
}

import { ICreateProduct } from './ICreateProduct';
import { IProduct } from './IProduct';
import { IUpdateProductSave } from './IUpdateProductSave';

export interface IProductRepository {
  findById(id: string): Promise<IProduct | undefined>;
  GetAll(): Promise<IProduct[]>;
  deleteById(product: IProduct): Promise<void>;
  save(product: ICreateProduct): Promise<IProduct>;
  findByName(name: string): Promise<IProduct | undefined>;
  update(product: IUpdateProductSave): Promise<IProduct>;
}

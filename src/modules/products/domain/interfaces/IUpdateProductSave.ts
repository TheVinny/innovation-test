import { IProduct } from './IProduct';

export interface IUpdateProductSave {
  product: IProduct;
  name: string;
  category: string;
  status: 'Active' | 'Inactive';
  quantity: number;
}

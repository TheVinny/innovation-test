export interface ICreateProduct {
  name: string;
  category: string;
  status: 'Active' | 'Inactive';
  quantity: number;
}

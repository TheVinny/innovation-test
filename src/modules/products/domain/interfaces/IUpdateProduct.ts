export interface IUpdateProduct {
  id: string;
  name: string;
  category: string;
  status: 'Active' | 'Inactive';
  quantity: number;
}

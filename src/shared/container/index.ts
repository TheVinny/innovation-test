import { container } from 'tsyringe';

import ProductRepository from '@modules/products/infra/repositories/ProductsRepository';
import { IProductRepository } from '@modules/products/domain/interfaces/IProductRepository';
import { IIbgeRepository } from '@modules/Ibge/domain/interfaces/IIbgeRepository';
import IbgeRepository from '@modules/Ibge/infra/repositories/IbgeRepository';

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);

container.registerSingleton<IIbgeRepository>('IbgeRepository', IbgeRepository);

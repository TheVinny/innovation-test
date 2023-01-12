import { Router } from 'express';
import CreateProductControler from '../controllers/CreateProductControler';
import DeleteByIdController from '../controllers/DeleteByIdController';
import GetAllProductsController from '../controllers/GetAllProductsController';
import GetByIdProductController from '../controllers/GetByIdProductController';
import UpdateProductController from '../controllers/UpdateProductController';
import { Joi, celebrate, Segments } from 'celebrate';

const productRouter: Router = Router();

//MIddlewares de validação das rotas

const middlewares = {
  create: celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      quantity: Joi.number().required(),
      status: Joi.string().required().valid('Active', 'Inactive'),
      category: Joi.string().required(),
    },
  }),
  update: celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },

    [Segments.BODY]: {
      name: Joi.string(),
      quantity: Joi.number(),
      status: Joi.string().valid('Active', 'Inactive'),
      category: Joi.string(),
    },
  }),

  validID: celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required().uuid(),
    },
  }),
};

productRouter.post('/', middlewares.create, CreateProductControler.execute);

productRouter.get('/', GetAllProductsController.execute);
productRouter.get(
  '/:id',
  middlewares.validID,
  GetByIdProductController.execute,
);
productRouter.delete('/:id', middlewares.validID, DeleteByIdController.execute);
productRouter.put('/:id', middlewares.update, UpdateProductController.execute);

export default productRouter;

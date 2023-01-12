import { Router } from 'express';
import IbgeController from '../controller/IbgeController';

const ibgeRouter: Router = Router();

ibgeRouter.get('/', IbgeController.execute);

export default ibgeRouter;

import ibgeRouter from '@modules/Ibge/infra/http/routes/IbgeRoutes';
import productRouter from '@modules/products/infra/http/routes/productRouter';
import { Router } from 'express';

const router: Router = Router();

router.use('/product', productRouter);
router.use('/ibge', ibgeRouter);

export default router;

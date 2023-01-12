import { errors } from 'celebrate';
import express from 'express';
import 'express-async-errors';
import ErrorMiddleware from '../middlewares/ErrorMiddleware';
import router from './routes/routes';

class Server {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (_req, res) => res.json({ ok: true }));
  }

  private config(): void {
    this.app.use(express.json());

    this.app.use(router);

    this.app.use(errors({ statusCode: 403 }));

    this.app.use(ErrorMiddleware);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default Server;

import express from "express";
import router from "./routes/routes";

class Server {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get("/", (_req, res) => res.json({ ok: true }));
  }

  private config(): void {
    this.app.use(express.json());

    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default Server;

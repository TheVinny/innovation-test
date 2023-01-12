import productRouter from "@modules/products/infra/http/routes/productRouter";
import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("ok");
});

router.use("/product", productRouter);

export default router;

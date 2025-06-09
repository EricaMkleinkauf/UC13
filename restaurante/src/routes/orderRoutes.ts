import { Router } from "express";
import { OrderController } from "../controller/orderController";
const routes = Router();
const orderController = new OrderController();

routes.get("/order", orderController.list);
routes.post("/order", orderController.create);
routes.delete("/order/:id", orderController.delete);
routes.get("/order/:id", orderController.show);
routes.put("/order/:id", orderController.update);

export default routes;
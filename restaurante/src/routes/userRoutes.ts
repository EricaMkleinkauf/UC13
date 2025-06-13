import { Router } from "express";
import { UserController } from "../controller/UserController";
const routes = Router();
const userController = new UserController();

routes.get("/users", userController.list);
routes.post("/users", userController.create);
routes.delete("/users/:id", userController.delete);
routes.get("/users/:id", userController.show);
routes.put("/users/:id", userController.update);

export default routes;
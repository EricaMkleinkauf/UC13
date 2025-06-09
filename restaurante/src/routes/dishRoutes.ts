import { Router } from "express";
import { dishController } from "../controller/dishController";

const router: Router = Router();
const DishController = new dishController();

router.get("/dish", DishController.list);
router.post("/dish", DishController.create);
router.delete("/dish/:id", DishController.delete);
router.get("/dish/:id", DishController.show);
router.put("/dish/:id", DishController.update);

export default router;
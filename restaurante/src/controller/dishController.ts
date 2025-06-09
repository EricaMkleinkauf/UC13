import { AppDataSource } from "../config/data-source";
import { Dish } from "../models/Dish";
import { Request, Response } from "express";

const dishrepository = AppDataSource.getRepository(Dish);

export class dishController {
  //lista
  async list(req: Request, res: Response) {
    const dish = await dishrepository.find();
    res.status(200).json(dish);
    return;
  }

  // Criar 
  async create(req: Request, res: Response) {
    const { name, description, price, available } = req.body;

    const dish = new Dish(name, description, price, available);
    await dishrepository.save(dish);

    res.status(201).json(dish);
    return;
  }

  // Buscar por ID
  async show(req: Request, res: Response) {
    const dish = await dishrepository
      .createQueryBuilder("dish")
      .where("dish._name = :name", { name })
      .getOne();
  }

  // Atualiza
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, price, available } = req.body;

    const dish = await dishrepository.findOneBy({ id: Number(id) });

    if (!dish) {
      res.status(404).json({ message: "Dish não encontrado" });
      return;
    }

    dish.name = name;
    dish.description = description;
    dish.price = price;
    dish.available = available;

    await dishrepository.save(dish);
    res.json(dish);
  }

  // Deleta
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const Dish = await dishrepository.findOneBy({ id: Number(id) });

    if (!Dish) {
      res.status(404).json({ message: "Dish não encontrado" });
      return;
    }

    await dishrepository.remove(Dish);

    res.status(204).send();
    return;
  }
}
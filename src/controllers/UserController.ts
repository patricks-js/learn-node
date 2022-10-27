import { Request, Response } from "express";

import { AppError } from "../utils/AppError";

export class UserController {
  create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    if(!name) {
      throw new AppError("Name is required");
    }

    res.status(201).json({ name, email, password });
  }
}

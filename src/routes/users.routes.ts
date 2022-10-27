import { NextFunction, Request, Response, Router } from 'express';
import { UserController } from '../controllers/UserController';

export const userRoutes = Router()

function myMiddleware(req: Request, res: Response, next: NextFunction) {
  if (!req.body.isAdm) {
    return res.json({message: "User unauthorized!"})
  }
  console.log("User ADM");
  next()
}


const userController = new UserController();

// Use for all routes
userRoutes.use(myMiddleware)
userRoutes.post("/", myMiddleware, userController.create);

// Use for only route
// userRoutes.post("/", myMiddleware, userController.create);

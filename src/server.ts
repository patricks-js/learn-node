import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";

import { migrationsRun } from "./database/sqlite/migrations/index";
import { routes } from "./routes/index";
import { AppError } from "./utils/AppError";


const app = express();

app.use(express.json());

migrationsRun()

app.use(routes);

app.use((error: Error, req : Request, res: Response, next: NextFunction) => {
  if(error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.log(error);

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

const PORT = 3333;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

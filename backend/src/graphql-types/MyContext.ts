import { Request, Response } from "express";

export interface MyContext {
  req: Request & { session: { userId: number } };;
  res: Response;
}

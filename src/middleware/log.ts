import { Request, Response, NextFunction } from "express";
const logMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const agent = req.headers["user-agent"];
  console.log("user-agent", agent);
  next();
};

export { logMiddleware };

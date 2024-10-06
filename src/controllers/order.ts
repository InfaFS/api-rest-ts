import { Request, Response } from "express";

import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}
const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      dat: "Data only visible with JWT!",
      user: req.user,
    });
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export { getItems };

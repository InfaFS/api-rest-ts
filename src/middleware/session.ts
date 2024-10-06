import { NextFunction, Response, Request } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}
const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`); //lo transforma en una string
    console.log(isUser);
    if (!isUser) {
      res.status(401);
      res.send("JWT_NO_VALID");
    } else {
      req.user = isUser;
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESSION_NO_VALID");
  }
};

export { checkJWT };

import { Router, Request, Response } from "express";
import { postAuth, loginCtrl, registerCtrl } from "../controllers/auth";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send({ data: "Usted se encuentra dentro de la ruta auth" });
});
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };

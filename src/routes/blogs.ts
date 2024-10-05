import { Router } from "express";

const router = Router();

export { router };

router.get("/", (_req, res) => {
  res.send({ data: "ACA_VAN_LOS_BLOGS" });
});

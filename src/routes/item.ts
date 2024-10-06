import { Router, Request, Response } from "express";

import {
  deleteItem,
  getItems,
  postItem,
  updateItem,
  getItem,
} from "../controllers/item";
import { logMiddleware } from "../middleware/log";
const router = Router();

router.get("/", logMiddleware, getItems);
router.get("/:id", getItem);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };

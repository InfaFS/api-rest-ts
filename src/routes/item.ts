import { Router, Request, Response } from "express";

import {
  deleteItem,
  getItem,
  postItem,
  updateItem,
} from "../controllers/items";
const router = Router();

router.get("/", getItem);
router.get("/:id", getItem);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };

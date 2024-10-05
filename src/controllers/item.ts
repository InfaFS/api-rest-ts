import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar } from "../services/item";

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await getCar(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};
const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEM", error);
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

//no olvidar de exportar las funciones
export { getItems, updateItem, postItem, deleteItem, getItem };

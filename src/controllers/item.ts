import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  insertCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
} from "../services/item";

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    const data = response ? response : "NO_DATA";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCar(id, body);
    res.send(response);
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

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseItem = await deleteCar(id);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};

//no olvidar de exportar las funciones
export { getItems, updateItem, postItem, deleteItem, getItem };

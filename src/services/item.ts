import ItemModel from "../models/item";
import { Car } from "../interfaces/car.interface";

const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getCar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const updateCar = async (id: string, item: Car) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, item, {
    new: true,
  });

  return responseItem;
};

const deleteCar = async (id: string) => {
  const responseItem = await ItemModel.findOneAndDelete({ _id: id });
  return responseItem;
};
export { insertCar, getCars, getCar, updateCar, deleteCar };

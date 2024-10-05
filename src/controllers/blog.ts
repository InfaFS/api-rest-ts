import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
  try {
    res.send({ data: "ACA_VAN_LOS_BLOGS" });
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};
const postBlog = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_POST_BLOG");
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_BLOG");
  }
};

//no olvidar de exportar las funciones
export { getBlog, updateBlog, postBlog, deleteBlog };

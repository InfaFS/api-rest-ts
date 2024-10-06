import { Request, response, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { registerNewUser, loginUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(body);
    res.send(responseUser);
  } catch (error) {
    handleHttp(res, "ERROR_REGISTER_CTRL", error);
  }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
    const responseUser = await loginUser({ email, password });
    if (responseUser === "PASSWORD_INCORRECT") {
      res.status(403);
      res.send(responseUser);
    } else {
      res.send(responseUser);
    }
  } catch (error) {
    handleHttp(res, "ERROR_LOGIN_CTRL", error);
  }
};

const postAuth = async ({ body }: Request, res: Response) => {
  try {
    console.log("entr");
    const data = {
      message: "User entered",
      body: body,
    };
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_POST_AUTH", error);
  }
};

export { postAuth, registerCtrl, loginCtrl };

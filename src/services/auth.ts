import { encrypt, verified } from "../utils/bcrypt.handle";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { generateToken } from "../utils/jwt.handle";
const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) {
    return "ALREADY_USER";
  }
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkUser = await UserModel.findOne({ email });
  if (!checkUser) {
    return "USER_NOT_FOUND";
  }

  const passwordHash = checkUser.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkUser.email);

  const data = {
    token,
    user: checkUser,
  };

  return data;
};

export { registerNewUser, loginUser };

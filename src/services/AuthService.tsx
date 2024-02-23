import { toast } from "react-toastify";
import IFormLogin, { Response } from "../models/LoginModel";
import IFormRegister from "../models/RegisterModel";
import IFormResetPassword from "../models/ResetPasswordModel";
import { Axios } from "./Api";

export default class AuthService {
  public static async Login(data: IFormLogin): Promise<Response<string>> {
    return new Promise((resolve, reject) => {
      Axios.post("login", data)
        .then((response) => {
          resolve(response as unknown as Response<string>);
        })
        .catch((error) => {
          reject(
            toast.error(error.message, {
              position: "bottom-center",
              autoClose: 5000,
              theme: "dark",
            })
          );
        });
    });
  }

  public static async Register(data: IFormRegister): Promise<Response<string>> {
    return new Promise((resolve, reject) => {
      Axios.post("register", data)
        .then((response) => {
          resolve(response as unknown as Response<string>);
        })
        .catch((error) => {
          reject(
            toast.error(error.message, {
              position: "bottom-center",
              autoClose: 5000,
              theme: "dark",
            })
          );
        });
    });
  }

  public static async ResetPassword(
    data: IFormResetPassword
  ): Promise<Response<string>> {
    return new Promise((resolve, reject) => {
      Axios.put("reset-password", data)
        .then((response) => {
          resolve(response as unknown as Response<string>);
        })
        .catch((error) => {
          reject(
            toast.error(error.message, {
              position: "bottom-center",
              autoClose: 5000,
              theme: "dark",
            })
          );
        });
    });
  }
}

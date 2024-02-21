import {
  CardLoginRegister,
  CardResetPassword,
} from "../../components/CardAuth/CardAuth";
import { FormLogin } from "./form-login/form-login";
import { FormRegister } from "./form-register/form-register";

export const LoginAndRegister = () => {
  return (
    <CardLoginRegister FormLogin={FormLogin} FormRegister={FormRegister} />
  );
};

export const ResetPassword = () => {
  return <CardResetPassword />;
};

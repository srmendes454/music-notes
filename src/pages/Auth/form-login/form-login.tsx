import { Input } from "../../../components/Input/Input";
import style from "./form-login.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMain } from "../../../store/MainProvider";
import { toast } from "react-toastify";
import IFormLogin from "../../../models/LoginModel";
import AuthService from "../../../services/AuthService";

const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato inválido"),
  password: z.string().nonempty("A senha e obrigatória"),
});

type LoginFormData = z.infer<typeof LoginFormSchema>;

function FormLogin() {
  const navigate = useNavigate();
  const { setIsGlobalLoading } = useMain();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  async function Login(data: IFormLogin) {
    setIsGlobalLoading(true);
    try {
      const result = await AuthService.Login(data);
      if (result.data.success === true) {
        toast.success(result.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          theme: "dark",
          onClose: () => (window.location.href = "/home"),
        });
      } else {
        toast.warning(result.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          theme: "dark",
        });
      }
      setIsGlobalLoading(false);
    } catch (error) { setIsGlobalLoading(false); }
  }

  return (
    <form className={style.container} onSubmit={handleSubmit(Login)}>
      <h1 className={style.title}>Entrar</h1>
      <span className={style.subtitle}>
        Digite seu email e senha para entrar no sistema
      </span>
      <Input
        type="text"
        placeholder="Email"
        icon="bi bi-envelope-at"
        validator={register}
        propertyValidator="email"
      />
      {errors.email && (
        <span className={style.validation}>{errors.email.message}</span>
      )}
      <Input
        type="password"
        placeholder="Senha"
        icon="bi bi-lock"
        validator={register}
        propertyValidator="password"
      />
      {errors.password && (
        <span className={style.validation}>{errors.password.message}</span>
      )}
      <div className={style.button}>
        <p
          className={style.resetPassword}
          onClick={() => navigate("/reset-password")}
        >
          → Esqueceu a senha ? ←
        </p>
        <button>Entrar</button>
      </div>
    </form>
  );
}

export { FormLogin };

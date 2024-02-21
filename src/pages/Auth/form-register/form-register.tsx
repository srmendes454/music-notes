import { Input } from "../../../components/Input/Input";
import style from "./form-register.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMain } from "../../../store/MainProvider";
import IFormRegister from "../../../models/RegisterModel";
import { toast } from "react-toastify";
import cardLoginRegisterStyle from '../../../components/CardAuth/CardAuth.module.scss';

const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatório")
      .transform((name) => {
        return name
          .trim()
          .split(" ")
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Formato inválido"),
    password: z
      .string()
      .nonempty("A senha e obrigatória")
      .min(6, "A senha precisa de ter no minimo 6 caracteres"),
    confirmPassword: z.string().nonempty("Confirme a senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas precisam ser iguais",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof RegisterFormSchema>;

function FormRegister() {
  const { setIsGlobalLoading } = useMain();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormSchema),
  });

  function Register(data: IFormRegister) {
    setIsGlobalLoading(true);
    const result = data;
    if (result !== null) {
      toast.success("Usuário cadastrado com sucesso!", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "dark"
      });
      document.getElementById("container")?.classList.toggle(cardLoginRegisterStyle.active)
    } else {
      toast.warning("Erro interno", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "dark"
      });
    }
    setIsGlobalLoading(false);
  }

  return (
    <form className={style.container} onSubmit={handleSubmit(Register)}>
      <h1 className={style.title}>Inscrever-se</h1>
      <span className={style.subtitle}>
        Digite seus dados para cadastrar no sistema
      </span>
      <Input
        type="text"
        placeholder="Nome"
        icon="bi bi-person"
        validator={register}
        propertyValidator="name"
      />
      {errors.name && (
        <span className={style.validation}>{errors.name.message}</span>
      )}
      <Input
        type="email"
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
      <Input
        type="password"
        placeholder="Confirme sua senha"
        icon="bi bi-lock"
        validator={register}
        propertyValidator="confirmPassword"
      />
      {errors.confirmPassword && (
        <span className={style.validation}>
          {errors.confirmPassword.message}
        </span>
      )}
      <div className={style.button}>
        <button>Inscrever-se</button>
      </div>
    </form>
  );
}

export { FormRegister };

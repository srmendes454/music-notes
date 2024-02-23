import { Input } from "../../../components/Input/Input";
import style from "./form-resetPassword.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMain } from "../../../store/MainProvider";
import { useForm } from "react-hook-form";
import IFormResetPassword from "../../../models/ResetPasswordModel";
import { toast } from "react-toastify";
import AuthService from "../../../services/AuthService";

const ResetPaswwordFormSchema = z.object({
  email: z.string().nonempty("O email é obrigatório").email("Formato inválido"),
});

type ResetPaswwordFormData = z.infer<typeof ResetPaswwordFormSchema>;
function FormResetPassword() {
  const navigate = useNavigate();
  const { setIsGlobalLoading } = useMain();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPaswwordFormData>({
    resolver: zodResolver(ResetPaswwordFormSchema),
  });

  async function ResetPassword(data: IFormResetPassword) {
    setIsGlobalLoading(true);
    try {
      const result = await AuthService.ResetPassword(data);
      if (result.data.success === true) {
        toast.success(result.data.message, {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
          onClose: () => (window.location.href = "/login"),
        });
      } else {
        toast.warning("Erro interno", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
        });
      }
      setIsGlobalLoading(false);
    } catch (error) { setIsGlobalLoading(false); }
  }

  return (
    <form className={style.container} onSubmit={handleSubmit(ResetPassword)}>
      <h1 className={style.title}>Recuperar Senha</h1>
      <span className={style.subtitle}>
        Informe seu email cadastrado no sistema
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
      <div className={style.button}>
        <p className={style.resetPassword} onClick={() => navigate("/login")}>
          → Cancelar ←
        </p>
        <button>Enviar</button>
      </div>
    </form>
  );
}

export { FormResetPassword };

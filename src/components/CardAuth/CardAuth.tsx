import { useState } from "react";
import { FormResetPassword } from "../../pages/Auth/form-resetPassword/form-resetPassword";
import style from "./CardAuth.module.scss";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

interface CardAuthProps {
  FormLogin: any;
  FormRegister: any;
}

function CardLoginRegister(props: CardAuthProps) {
  const { FormLogin, FormRegister } = props;
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  const handleSelected = (open: boolean) => {
    setOpenAdd(!open);
  };

  return (
    <div className={style.container} id="container">
      <div className={style.containerRegister}><FormRegister/></div>
      <div className={style.containerLogin}><FormLogin/></div>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={classNames(style.tooggle_panel, style.cardLeft)}>
            <h1>A paz de Deus!</h1>
            <p>
              Já e cadastrado? <br />
              Então retorne ao sistema e desfrute dos recursos disponíveis.
            </p>
            <button
              className={style.button}
              id="login"
              onClick={() =>
                document.getElementById("container")?.classList.toggle(style.active)
              }
            >
              Entrar
            </button>
          </div>
          <div className={classNames(style.tooggle_panel, style.cardRight)}>
            <h1>A paz de Deus!</h1>
            <p>
              Gerencie suas aulas musicais de maneira fácil e descomplicada...
            </p>
            <button
              className={style.button}
              id="register"
              onClick={() =>
                document.getElementById("container")?.classList.toggle(style.active)
              }
            >
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardResetPassword() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.containerLogin}>{<FormResetPassword />}</div>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={classNames(style.tooggle_panel, style.cardRight)}>
            <h1>A paz de Deus!</h1>
            <p>
              Esqueceu a senha? <br />
              Sem problemas, nos informe seu email cadastrado no sistema, que te
              ajudamos!
            </p>
            <button className={style.button} onClick={() => navigate("/login")}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CardLoginRegister, CardResetPassword };

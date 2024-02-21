import { useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import { useState } from "react";
import classNames from "classnames";
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  const [avatar, setAvatar] = useState("");
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSelected = (open: boolean) => {
    setOpenAdd(!open);
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <span onClick={() => navigate("/home")} />
      </div>
      <div className={style.notification}>
        <i className="bi bi-bell-fill"></i>
      </div>
      <span
        onClick={() => handleSelected(openAdd)}
        className={classNames({
          [style.active]: openAdd,
        })}
      >
        <div className={style.avatar}>
          {avatar === "" ? <span>GB</span> : <img src={avatar} alt="User" />}
        </div>
      </span>
    </header>
  );
}

export { Header }

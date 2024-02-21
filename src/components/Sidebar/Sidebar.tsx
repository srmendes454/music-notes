import { useLocation, useNavigate } from "react-router-dom";
import style from "./Sidebar.module.scss";
import { useState } from "react";
import classNames from "classnames";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [itens, setItens] = useState([
    {
      id: 1,
      background: "#364959",
      icon: "bi bi-columns-gap",
      route: "/home",
      iconSize: "",
      titleTootip: "Modulos",
    },
    {
      id: 2,
      background: "#364959",
      icon: "bi bi-people",
      route: "/group",
      iconSize: "",
      titleTootip: "Grupos",
    },
    {
      id: 3,
      background: "#364959",
      icon: "bi bi-ubuntu",
      route: "/organist-rotation",
      iconSize: "",
      titleTootip: "Rodizio de Organistas",
    },
    {
      id: 4,
      background: "#364959",
      icon: "bi bi-envelope-paper",
      route: "/exam",
      iconSize: "",
      titleTootip: "Exames",
    }
  ]);

  const handleNavigate = (item: any) => {
    navigate(item.route);
  };

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        {itens.map((i) => (
          <li
            key={i.id}
            onClick={() => handleNavigate(i)}
            className={classNames({
              [style.active]: location.pathname.match(i.route),
            })}
          >
            <span
              className={style.icon}
              style={{
                background: location.pathname.match(i.route)
                  ? i.background
                  : "none",
              }}
            >
              <i className={i.icon} style={{ fontSize: i.iconSize }}></i>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Sidebar };

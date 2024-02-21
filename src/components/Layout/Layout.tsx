import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import style from "./Layout.module.scss";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Header />
      </header>
      <aside className={style.sidebar}>
        <Sidebar />
      </aside>
      <div className={style.card}>{children}</div>
    </div>
  );
}

export { Layout };

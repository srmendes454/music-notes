import { ReactNode } from "react";
import style from "./ExternalLayout.module.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

interface ExternalLayoutProps {
  children: ReactNode;
}

export const ExternalLayout = ({ children }: ExternalLayoutProps) => {
  return (
    <div className={style.container}>
      {children}
      <ul className={style.notes}>
        <i className="bi bi-music-note"></i>
        <i className="bi bi-music-note-beamed"></i>
        <i className="bi bi-music-note-list"></i>

        <i className="bi bi-music-note"></i>
        <i className="bi bi-music-note-beamed"></i>
        <i className="bi bi-music-note-list"></i>

        <i className="bi bi-music-note"></i>
        <i className="bi bi-music-note-beamed"></i>
        <i className="bi bi-music-note-list"></i>
        
        <i className="bi bi-music-note"></i>
        <i className="bi bi-music-note-beamed"></i>
        <i className="bi bi-music-note-list"></i>
      </ul>
    </div>
  );
};

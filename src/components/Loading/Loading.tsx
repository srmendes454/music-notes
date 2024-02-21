import style from "./Loading.module.scss";

function Loading() {
  return (
    <div className={style.container}>
      <i className={style.progressIcon}></i>
      <div className={style.border}>
        <div className={style.progress}></div>
      </div>
    </div>
  );
}

export { Loading };

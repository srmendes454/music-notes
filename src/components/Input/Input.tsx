import style from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholder: string;
  icon?: string;
  validator?: any;
  propertyValidator?: string;
}

function Input(Props: InputProps) {
  const {
    type,
    placeholder,
    icon, 
    validator,
    propertyValidator
  } = Props;

  return (
    <>
      <label className={style.container}>
        <input type={type} placeholder="" {...validator(propertyValidator)}/>
        <span className={style.placeholder}>
          <i className={icon}></i> {placeholder}
        </span>
      </label>
    </>
  );
}

export { Input };

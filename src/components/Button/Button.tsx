import { FC } from "react";
import styles from "./Button.module.css";
import { IButtonProps } from "./Button.props";

const Button: FC<IButtonProps> = ({ children, ...arg }) => {
  return (
    <button className={styles.button} {...arg}>
      {children}
    </button>
  );
};

export default Button;

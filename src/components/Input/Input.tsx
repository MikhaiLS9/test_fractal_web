import { FC } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";

const Input: FC<InputProps> = ({  ...props }) => {
  return <input className={styles.input} {...props}  />;
};

export default Input;

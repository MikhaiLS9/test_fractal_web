import { FC, FormEvent, useRef, useState } from "react";
import SelectionUserOrRepo from "../../../components/SelectionUserOrRepo/SelectionUserOrRepo";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { InfoProps } from "../../../interfaces/interfaces.gitHub";
import styles from './FormGetGitHub.module.css'

export interface IFormGetGitHubProps {
  setInfo: (prev: InfoProps) => void;
}
const FormGetGitHub: FC<IFormGetGitHubProps> = ({ setInfo }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isError, setIsError] = useState<string | null>(null);

  const submitFormGetGitHub = async (e: FormEvent<HTMLFormElement>) => {
    setIsError(null);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const trimmedText = data?.text.toString().trim();
    const dataType = data?.type.toString();
    if (trimmedText.length >= 3) {
      const gitHubInfo = {
        text: trimmedText,
        type: dataType,
      };

      setInfo(gitHubInfo);
    } else {
      console.error("Error.");
      setIsError("Ошибка. Длина меньше 3 символов");
    }
    formRef.current?.reset();
  };

  return (
    <form action="" ref={formRef} onSubmit={submitFormGetGitHub} className={styles.form}>
      {isError && <div>{isError}</div>}
      <div className={styles.formField}>
        <label htmlFor="text">Название</label>
        <Input id="text" name="text" />
      </div>

      <div className={styles.formField}>
        <label htmlFor="type"> Выберите тип</label>
        <SelectionUserOrRepo />
      </div>

      <Button>Отправить</Button>
    </form>
  );
};

export default FormGetGitHub;

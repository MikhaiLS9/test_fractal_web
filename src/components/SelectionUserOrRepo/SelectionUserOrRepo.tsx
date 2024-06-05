import { FC, useState } from "react";
import styles from "./SelectionUserOrRepo.module.css";
import Input from "../Input/Input";
import { options } from "../../const/option";

const SelectionUserOrRepo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState<string | null>(null);

  

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelection(option);
    setIsOpen(false);
  };
  return (
    <div className={styles.dropdown} onClick={toggleOpen}>
      {selection && (
        <Input
          type="hidden"
          id="selectionUserOrRepo"
          name="type"
          value={selection}
        />
      )}

      {selection}
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option) => (
            <li
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
              key={option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectionUserOrRepo;

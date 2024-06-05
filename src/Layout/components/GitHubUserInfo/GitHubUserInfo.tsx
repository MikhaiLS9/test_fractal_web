import { FC } from "react";
import { IUserInfo } from "../../../interfaces/interfaces.gitHub";
import styles from "./GitHubUserInfo.module.css";

const GitHubUserInfo: FC<IUserInfo> = ({ name, public_repos }) => {
  return (
    <div>
      <div className={styles.info_block}>
        <p>Имя :</p>
        <h2>{name}</h2>
      </div>

      <div className={styles.info_block}>
        <p>Репозитории :</p>
        <p>{public_repos}</p>
      </div>
    </div>
  );
};

export default GitHubUserInfo;

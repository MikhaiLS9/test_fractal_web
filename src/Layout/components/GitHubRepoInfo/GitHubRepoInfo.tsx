import { FC } from "react";
import { IReposInfo } from "../../../interfaces/interfaces.gitHub";
import styles from "./GitHubRepoInfo.module.css";

const GitHubRepoInfo: FC<IReposInfo> = ({ name, stargazers_count }) => {
  return (
    <div>
      <div className={styles.info_block}>
        <p>Имя :</p>
        <h2>{name}</h2>
      </div>
      <div className={styles.info_block}>
        <p>Звезды :</p>
        <p>{stargazers_count}</p>
      </div>
    </div>
  );
};

export default GitHubRepoInfo;

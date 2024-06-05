import { FC, useState } from "react";
import { IMainProps } from "./Main.props";
import styles from "./Main.module.css";
import FormGetGitHub from "../components/FormGetGitHub/FormGetGitHub";
import GitHubUserInfo from "../components/GitHubUserInfo/GitHubUserInfo";
import GitHubRepoInfo from "../components/GitHubRepoInfo/GitHubRepoInfo";
import {
  IUserInfo,
  IReposInfo,
  InfoProps,
} from "../../interfaces/interfaces.gitHub";
import useGithubInfo from "../../hooks/useGithubInfo";

const Main: FC<IMainProps> = ({ children }) => {
  const [gitHubInfo, setGitHubInfo] = useState<InfoProps | undefined>();

  const { data, error, loading } = useGithubInfo(gitHubInfo);

  return (
    <main className={styles.main}>
      {error && <div>Error</div>}
      {loading && <div>Loading...</div>}
      <FormGetGitHub setInfo={setGitHubInfo} />
      {gitHubInfo?.type === "users" && data && (
        <GitHubUserInfo
          name={data.name}
          public_repos={(data as IUserInfo).public_repos}
        />
      )}
      {gitHubInfo?.type === "repos" && data && (
        <GitHubRepoInfo
          name={data.name}
          stargazers_count={(data as IReposInfo).stargazers_count}
        />
      )}
      {children}
    </main>
  );
};

export default Main;

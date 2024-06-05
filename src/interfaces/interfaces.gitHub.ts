export type IOptionsInfo = ["users", "repos"];
export interface IUserInfo {
  name: string;
  public_repos: number;
}

export interface IReposInfo {
  name: string;
  stargazers_count: number;
}

export interface InfoProps {
  text: string;
  type: string;
}
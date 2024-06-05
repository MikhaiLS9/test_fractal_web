import { useState, useEffect } from "react";
import {
  IReposInfo,
  IUserInfo,
  InfoProps,
} from "../interfaces/interfaces.gitHub";
import { API } from "../API/API";

const useGithubInfo = (gitHubInfo: InfoProps | undefined) => {
  const [data, setData] = useState<IUserInfo | IReposInfo>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (gitHubInfo) {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${API}/${gitHubInfo.type}/${gitHubInfo.text}`
          );

          if (!response.ok) {
            throw new Error("Error");
          }
          const data = await response.json();
          setData(data);
          setLoading(false);
        } catch (err) {
          setError(err instanceof Error ? err : new Error(String(err)));
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [gitHubInfo]);

  return { data, error , loading};
};

export default useGithubInfo;

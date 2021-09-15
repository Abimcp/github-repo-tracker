import React, { useContext } from "react";
import { RepoCard } from "..";
import { RepoContext } from "../../context/RepoContext";

const Repos = () => {
  const [repos, setRepos] = useContext(RepoContext);
  return (
    <>
      {repos.map((repo) => (
        <RepoCard
          key={repo.repoName}
          username={repo.username}
          repoName={repo.repoName}
          url={repo.url}
          forks={repo.forks}
          language={repo.repoLanguage}
          openIssues={repo.openIssues}
          watchers={repo.watchers}
          stargazers={repo.stargazers}
          language={repo.language}
        />
      ))}
    </>
  );
};

export default Repos;

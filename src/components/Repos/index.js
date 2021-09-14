import { id } from "postcss-selector-parser";
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
          repoName={repo.repoName}
          link={repo.link}
          forks={repo.forks}
          openIssues={repo.openIssues}
          watchers={repo.watchers}
        />
      ))}
    </>
  );
};

export default Repos;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Repo = () => {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");
  const error = useSelector((state) => state.error);

  const updateUsername = (value) => {
    setUsername(value);
  };

  const fetchRepos = async () => {
    try {
      setError(null);
      let { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      if (!data.length) {
        error("Sorry, this user has no public repos");
      } else {
        const array = data.reverse().map((repo) => {
          let username = repo.username;
          let repoName = repo.name;
          let url = repo.html_url;
          let forks = repo.forks;
          let openIssues = repo.open_issues;
          let watchers = repo.watchers;
          let language = repo.language;
          let stargazers = repo.stargazers;
          return {
            username,
            repoName,
            url,
            forks,
            openIssues,
            watchers,
            language,
            stargazers,
          };
        });
        setRepos(array);
      }
    } catch (err) {
      console.warn(err);
      setError("Sorry, this user does not exist");
    }
  };

  useEffect(() => {
    if (username) {
      fetchRepos();
    }
  }, [username]);
};

const renderCards = (data) =>
  data.map((repoEntry, i) => (
    <>
      <RepoCard>
        language={repoEntry.repoLanguage}
        repoName={repoEntry.repoName}
        key={i}
        link={repoEntry.url}
        forks={repoEntry.forks}
        openIssues={repoEntry.openIssues}
        watchers={repoEntry.watchers}
        stargazers={repoEntry.stargazers}
      </RepoCard>
    </>
  ));

return (
  <>
    <Form updateUsername={updateUsername} />
    {error ? <p id="error-msg">{error}</p> : renderCards(repos)}
  </>
);

export default Repo;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Repo = () => {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

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
        setError("Sorry, this user has no public repos");
      } else {
        const array = data.reverse().map((repo) => {
          let repoName = repo.name;
          let url = repo.html_url;
          let forks = repo.forks;
          let openIssues = repo.open_issues;
          let watchers = repo.watchers;
          let language = repo.language;
          let stargazers = repo.stargazers;
          return { repoName, url, forks, openIssues, watchers, language, stargazers };
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
    <RepoCard
      repoName={repoEntry.repoName}
      key={i}
      link={repoEntry.url}
      forks={repoEntry.forks}
      openIssues={repoEntry.openIssues}
      watchers={repoEntry.watchers}
      stargazers={repoEntry.stargazers}
    />
  ));

return (
  <>
    <Form updateUsername={updateUsername} />
    {error ? <p id="error-msg">{error}</p> : renderCards(repos)}
  </>
);

export default Repo;

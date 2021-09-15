import React, { useState, useContext } from "react";
import "./styles.css";
import axios from "axios";
import { RepoContext } from "../../context/RepoContext";

const Form = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const [repos, setRepos] = useContext(RepoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRepos(user);
    setUser("");
  };

  const updateInput = (e) => {
    const input = e.target.value;
    setUser(input);
  };

  const fetchRepos = async (user) => {
    try {
      setError(null);
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      if (!data.length) {
        setError("Sorry, this user has no public repos");
      }
      const array = data.reverse().map((repo) => {
        let repoName = repo.name;
        let url = repo.html_url;
        let forks = repo.forks;
        let openIssues = repo.open_issues;
        let watchers = repo.watchers;
        let language = repo.language;

        return {
          repoName,
          url,
          forks,
          openIssues,
          watchers,
          language,
        };
      });
      setRepos(array);
      console.log(array);
    } catch (err) {
      console.log(err);
      if (data && data.status === 404) {
        setError("That's not a valid Username");
      }
      throw new Error(err.message);
    }
  };

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit} aria-label="search">
        <input
          className="search-input"
          type="text"
          aria-label="Repo"
          value={user}
          name="user"
          onChange={updateInput}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Form;

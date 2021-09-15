import React from "react";
import "./style.css";
import "remixicon/fonts/remixicon.css";

const RepoCard = ({
  repoName,
  url,
  forks,
  openIssues,
  watchers,
  stargazers,
  language,
}) => {
  return (
    <div id="card">
      <h1>
        {" "}
        <a className="repo-url" target="_blank" href={url}>
          {repoName}
        </a>
      </h1>
      <div id="details">
        <p>Forks: {forks}</p>
        <p>Open Issues: {openIssues}</p>
        <p>Watchers: {watchers}</p>
        <p>
          Stars:{" "}
          <span>
            <i className="ri-star-fill"></i>
          </span>
          {stargazers}
        </p>
        <p>Languages: {language}</p>
      </div>
    </div>
  );
};

export default RepoCard;

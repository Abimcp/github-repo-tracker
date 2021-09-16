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
      <a className="repo-url" target="_blank" href={url}>
        {repoName}
      </a>

      <span className="language">{language}</span>
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
      </div>
    </div>
  );
};

export default RepoCard;

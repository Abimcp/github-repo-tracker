import React from "react";
import "./style.css";
import 'remixicon/fonts/remixicon.css'

const RepoCard = ({ repoName, link, forks, openIssues, watchers, stargazers }) => {
  return (
    <div id="card">
      <h1>
        {" "}
        <a href={link}>{repoName}</a>
      </h1>
      <div id="details">
        <p>Forks: {forks}</p>
        <p>Open Issues: {openIssues}</p>
        <p>Watchers: {watchers}</p>
        <p>Stargazers: <span><i className="ri-star-fill"></i></span>{stargazers}</p>
      </div>
    </div>
  );
};

export default RepoCard;
 

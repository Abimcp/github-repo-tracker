import React from 'react';
import './style.css';

const RepoCard = ({repoName, link, forks, openIssues, watchers}) => {
    return (
    <div id="card">
    <h1> <a href={link}>{repoName}</a></h1>
    <div id="details"> 
    <p> 
        Forks: {forks}
    </p>
    <p> 
    Open Issues: {openIssues}
    </p>
    <p> 
    Watchers: {watchers}
    </p>
    
    
    </div>
    </div>
    );
}

export default RepoCard;
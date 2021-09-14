import React, { useState } from "react";
const RepoContext = React.createContext([]);

const RepoContextProvider = ({ children }) => {
  const [repo, setRepo] = useState([]);
  return (
    <RepoContext.Provider value={[ repo, setRepo ]}>
      {children}
    </RepoContext.Provider>
  );
};

export { RepoContextProvider, RepoContext };

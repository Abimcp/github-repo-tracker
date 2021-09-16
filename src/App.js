import React from "react";
import { Form } from "../src/components";
import Repos from "./components/Repos";
import { RepoContextProvider } from "./context/RepoContext";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";

function App() {
  return (
    <RepoContextProvider>
      <div id="app">
        <Header />
        <Form />
        
        <Repos />
        <Footer />
      </div>
    </RepoContextProvider>
  );
}

export default App;

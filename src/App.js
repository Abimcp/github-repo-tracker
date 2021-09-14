import React from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar } from "./components";
import { Welcome } from "./pages";
import { About } from "./pages";
import { Search } from "./pages";

function App() {
  return (
    <div id="app">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

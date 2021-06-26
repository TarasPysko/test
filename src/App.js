import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import { AlertState } from "./components/context/alert/AlertState";
import { GithubState } from "./components/context/github/GithubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/profile/:name" exact component={Profile} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;

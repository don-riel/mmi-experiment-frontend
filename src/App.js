import React from "react";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Results from "./pages/Results.js";
import Reminder from "./pages/Reminder";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
      <Route path="/reminder">
          <Reminder />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

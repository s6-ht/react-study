import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route path={route.path}>{route.component()}</Route>
          ))}
          <Redirect from="/*" to={routes[0].path} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

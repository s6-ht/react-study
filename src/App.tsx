import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes";
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path}>{route.component()}</Route>
          ))}
          <Redirect from="/*" to={routes[0].path} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import { Route, Router, Switch } from "react-router-dom";
import useAuthHandler from "../hooks/useAuthHandler";

import Home from "./Home";
import Login from "./Login";
import history from "../history";
import { AuthProvider } from "../contexts/AuthContext";

const App = () => (
  <AuthProvider value={(authState, setLoggedInState)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={props => <Login {...props} />} />
        <Route path="/Home" exact render={props => <Home {...props} />} />
      </Switch>
    </Router>
  </AuthProvider>
);

export default App;

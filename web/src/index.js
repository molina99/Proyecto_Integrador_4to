import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login";
import Home from "./components/home";
import Header from "./components/header";
import Register from "./components/add_user";
import CreateQuestion from "./components/add_question";
import UpdateQuestion from "./components/update_question";
import Question from "./components/questions";
import User from "./components/users";

render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/header" component={Header}></Route>
      <Route exact path="/add_user" component={Register}></Route>
      <Route exact path="/add_question" component={CreateQuestion}></Route>
      <Route exact path="/update_question" component={UpdateQuestion}></Route>
      <Route exact path="/questions" component={Question}></Route>
      <Route exact path="/users" component={User}></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

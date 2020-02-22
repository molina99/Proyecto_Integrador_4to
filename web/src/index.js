import React from "react";
import ReactDOM, { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/tailwind.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/add_user";
import CreateQuestion from "./components/add_question";
import Question from "./components/questions";

render(
  <Router>
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/add_user" component={Register}></Route>
      <Route exact path="/add_question" component={CreateQuestion}></Route>
      <Route exact path="/questions" component={Question}></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

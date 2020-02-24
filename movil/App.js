import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

import Home from "./src/screens/home";
import Board from "./src/screens/board";
import Questions from "./src/screens/questions";
import Winner from "./src/screens/winner";
import Loser from "./src/screens/loser";

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/winner" component={Winner} />
            <Route exact path="/loser" component={Loser} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

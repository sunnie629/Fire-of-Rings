import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/home";
import CreateRoom from "./Components/createRoom";
import JoinRoom from "./Components/joinRoom";
import Game from "./Components/game";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/joinRoom">
            <JoinRoom />
          </Route>
          <Route path="/createRoom">
            <CreateRoom />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

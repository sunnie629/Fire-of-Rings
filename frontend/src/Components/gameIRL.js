import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class GameIRL extends Component {
  state = {};

  componentDidMount() {
    console.log("gameirl");
  }

  render() {
    return (
      <div>
        <h1>irl game</h1>
      </div>
    );
  }
}

export default GameIRL;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class VotingGame extends Component {
  state = {};

  componentDidMount() {
    console.log("voting");
  }

  render() {
    return (
      <div>
        <h1>voting game</h1>
      </div>
    );
  }
}

export default VotingGame;

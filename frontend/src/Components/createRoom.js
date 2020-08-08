import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateRoom extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="./">
          <button>Back</button>
        </Link>

        <h1>hi</h1>

        {/* change link to game code*/}
        <Link to="/game">
          <button>Start Game</button>
        </Link>
      </div>
    );
  }
}

export default CreateRoom;

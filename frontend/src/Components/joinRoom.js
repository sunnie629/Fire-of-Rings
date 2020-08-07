import React, { Component } from "react";
import { Link } from "react-router-dom";

class JoinRoom extends Component {
  state = {};
  render() {
    return (
      <div>
        <Link to="./">
          <button>Back</button>
        </Link>
        <h1>JoinRoom</h1>
      </div>
    );
  }
}

export default JoinRoom;

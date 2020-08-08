import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  parentClick = (clicked, name) => {
    console.log(name + " " + clicked);
  };

  render() {
    return (
      <div>
        <h1>Hello, World {this.state.clicked}</h1>
        <Link to="/createRoom">
          <button>Create Game</button>
        </Link>
        <Link to="/joinRoom">
          <button>Join Game</button>
        </Link>
      </div>
    );
  }
}

export default Home;

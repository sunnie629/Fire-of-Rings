import React, { Component } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

let socket;
const endpoint = "localhost:5000";

class CreateRoom extends Component {
  state = {
    name: "",
    roomCode: Math.floor(Math.random() * 1000),
    users: [],
    sumbitted: false,
  };

  componentDidMount() {
    socket = io(endpoint);
    socket.on("usersUpdated", ({ usersarr }) => {
      console.log("createRoom ln:19");
      this.setState({ users: usersarr });
    });
  }

  componentWillUnmount() {
    socket.emit("disconnect");
    socket.off();
  }

  handleSubmit = () => {
    socket.emit("join", {
      name: this.state.name,
      roomCode: this.state.roomCode,
    });
    this.setState({ submitted: true });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <Link to="./">
          <button>Back</button>
        </Link>
        {this.state.submitted ? (
          <div>
            <h1>Room code: {this.state.roomCode}</h1>
            <ul>
              {this.state.users.map((user) => {
                return <li>{user.name}</li>;
              })}
            </ul>
            <Link to="/game">
              <button>Start Game</button>
            </Link>
          </div>
        ) : (
          <div>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChangeName}
                />
              </label>
            </form>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        )}
      </div>
    );
  }
}

export default CreateRoom;

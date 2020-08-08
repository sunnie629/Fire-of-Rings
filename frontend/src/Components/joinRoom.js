import React, { Component } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

let socket;
const endpoint = "localhost:5000";

class JoinRoom extends Component {
  state = {
    name: "",
    roomCode: "",
    users: [],
    sumbitted: false,
  };

  componentDidMount() {
    socket = io(endpoint);
    socket.on("usersUpdated", ({ usersarr }) => {
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

  handleChangeRoom = (event) => {
    this.setState({ roomCode: event.target.value });
  };

  render() {
    return (
      <div>
        <Link to="./">
          <button>Back</button>
        </Link>
        <h1>JoinRoom</h1>
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
              <label>
                Room Code:
                <input
                  type="text"
                  name="roomCode"
                  value={this.state.roomCode}
                  onChange={this.handleChangeRoom}
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

export default JoinRoom;

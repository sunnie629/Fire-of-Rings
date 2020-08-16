import React, { Component } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";

let socket;
const endpoint = "http://localhost:5000";

class CreateRoom extends Component {
  state = {
    name: "",
    roomCode: "1234",
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
    axios
      .post(`${endpoint}/room/postRoom`, {
        users: this.state.users,
        roomCode: this.state.roomCode,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ submitted: true });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleStart = () => {
    console.log(this.state.users);
    axios
      .put(`${endpoint}/room/updateRoom`, {
        users: this.state.users,
        roomCode: this.state.roomCode,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
                return <li key={user.name}>{user.name}</li>;
              })}
            </ul>
            <Link to="/game">
              <button onClick={this.handleStart}>Start Game</button>
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

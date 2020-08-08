import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Game extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/questions/getAllQuestions")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  render() {
    return (
      <div>
        <h1>game</h1>
      </div>
    );
  }
}

export default Game;

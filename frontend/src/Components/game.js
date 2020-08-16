import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import VotingGame from "./votingGame";
import GameIRL from "./gameIRL";

var ind = 0;
class Game extends Component {
  state = {
    questions: [],
    ind: 0,
    page: null,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/questions/getAllQuestions")
      .then((response) => {
        console.log(response.data);
        this.setState({ questions: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(() => {
        this.shuffle(this.state.questions);
      });
  }

  shuffle = (array) => {
    console.log("shushffle");
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ questions: array });
  };

  parseQuestions = () => {
    if (this.state.questions.length !== 0) {
      const end = this.state.questions.length;
      const { ind } = this.state;
      if (ind < end) {
        console.log(this.state.questions[ind].question.type);
        switch (this.state.questions[ind].question.type) {
          case "voting":
            console.log("v");
            this.setState({ page: <VotingGame />, ind: ind + 1 });
            return;
          case "gameirl":
            console.log("irl");
            this.setState({ page: <GameIRL />, ind: ind + 1 });
            return;
        }
      }
    }
  };

  render() {
    return (
      <div>
        {this.state.page}
        <button onClick={this.parseQuestions}>
          {this.state.ind == 0 ? "Start" : "Next"}
        </button>
      </div>
    );
  }
}

export default Game;

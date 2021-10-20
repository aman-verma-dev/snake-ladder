import React from "react";

import "./board.css";
import Tile from "./tile";

var rollVal = 0;

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roll: 0,
      playerPos: 1,
      win: false
    };
  }

  createBoard = () => {
    const { boardSize, snakes, ladders } = this.props;
    const { playerPos, roll } = this.state;
    let newPos = playerPos + roll;
    let board = [];
    let count = 1;

    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        let style = "light";
        if ((i + j) % 2 === 0) {
          style = "dark";
        }
        board.push({
          x: i,
          y: j,
          tileNum: count,
          style,
        });
        count++;
      }
    }

    snakes.forEach((snake, key) => {
      board[snake.from - 1].snake = { ...snake, id: key };
      board[snake.to - 1].snake = { ...snake, id: key };
    });

    ladders.forEach((ladder, key) => {
      board[ladder.from - 1].ladder = { ...ladder, id: key };
      board[ladder.to - 1].ladder = { ...ladder, id: key };
    });

    board.forEach((tile) => {
      if (tile.snake) {
        if (newPos === tile.snake.from) {
          newPos = tile.snake.to;
        }
      }
      if (tile.ladder) {
        if (newPos === tile.ladder.from) {
          newPos = tile.ladder.to;
        }
      }
    });
    board[newPos - 1].playerPos = "player";
    if (this.state.playerPos !== newPos) {
      this.setState({
        playerPos: newPos,
        roll: 0,
      });
    }
    return board;
  };

  rollDice = () => {
    let randNum = Math.floor(Math.random() * 6) + 1;
    console.log(randNum);
    this.setState({
      roll: randNum,
    });
    rollVal = randNum;
  };

  checkWin=()=>{
    const {boardSize} = this.props;
    if(this.state.playerPos === boardSize*boardSize) {
      alert("You won!! Restarting.")
      this.setState({
        playerPos: 1
      })
    }
  }

  render() {
    const board = this.createBoard();
    const tiles = board.map((tile) => {
      return (
        <div>
          <Tile
            row={tile.x}
            col={tile.y}
            num={tile.tileNum}
            style={tile.style}
            snake={tile.snake}
            ladder={tile.ladder}
            playerPos={tile.playerPos}
          />
        </div>
      );
    });
    return (
      <div className="layout">
        <div id="board">{tiles}</div>
        <div onClick={this.rollDice}>Click for Roll!! </div>
        <div>{` Result: ${rollVal}`}</div>
      </div>
    );
  }
}

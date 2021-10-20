import React from 'react';
import Board from './components/board';

import './App.css';

const boardSize = 10;

const snakes = [
  {
    from: 43,
    to: 2
  },
  {
    from: 97,
    to: 36
  },
  {
    from: 57,
    to: 17
  },
];

const ladders = [
  {
    from: 3,
    to: 67
  },
  {
    from: 23,
    to: 87
  },
  {
    from: 43,
    to: 78
  }
]

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  


  render() {
    const {dice, playerPos} = this.state;
    return (
      <div className='game-app'>
        <Board
          key={playerPos}
          boardSize={boardSize}
          snakes={snakes}
          ladders={ladders}
          playerPos={playerPos}
          roll={dice}
        />
        
      </div>
    )
  }
}

export default App;

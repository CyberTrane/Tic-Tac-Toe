const gameBoard = (() => {
  // let row;
  // let col;
  const board = [[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]];
  
  // return {
  //   // logStuff: () => {console.log('stuff')}
  //   logStuff: () => {
  //     console.log('stuffy')
  //   }
  // }

  return {
    // row: row,
    // col: col,
    render: () => {
      for (let i of board) {
        const string = i.join(' ');
        console.log(string);
      }
      console.log('');
    },
    updateBoard: (row, col, mark) => {
      board[row][col] = mark;
      gameBoard.render();
    }
  }

})();

function Player(name, mark) {

  return {
    name: name,
    mark: mark,
    inputMark: (mark) => {
      let userInput = Number(prompt('Each number corresponds to a free space. Please enter a number to make your move:'));
    }
  }

}

const gameController = (() => {
  gameBoard.render();

  // gameBoard.updateBoard(0, 0, 'X');

  const p1Name = prompt('Player 1, please enter your name:');
  let p1Mark = prompt('Hi ' + p1Name + ', please enter your mark (X or O):').toUpperCase();

  while (p1Mark !== 'X' && p1Mark !== 'O') {
    p1Mark = prompt('Error: please enter either X or O:').toUpperCase();
  }

  const p2Name = prompt('Player 2, please enter your name:');
  let p2Mark;

  if (p1Mark === 'X') {
    p2Mark = 'O';
  } else {
    p2Mark = 'X';
  }

  const player1 = Player(p1Name, p1Mark);
  const player2 = Player(p2Name, p2Mark);

})();
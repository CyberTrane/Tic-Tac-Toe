const gameBoard = (() => {
  // let row;
  // let col;
  const board = [['1', '2', '3'],
                 ['4', '5', '6'],
                 ['7', '8', '9']];
  
  // return {
  //   // logStuff: () => {console.log('stuff')}
  //   logStuff: () => {
  //     console.log('stuffy')
  //   }
  // }

  return {
    // row: row,
    // col: col,
    board: board,
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

  const marksMade = [];

  return {
    name: name,
    mark: mark,
    marksMade: marksMade,
    inputMark: (mark) => {
      let userInput = prompt(name + ', each number corresponds to a free space. Please enter a number to make your move:');
      let x = true;
      const board = gameBoard.board;

      while (x) { // loops through board array to find matching value and index
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === userInput && board[i][j] !== 'X' && board[i][j] !== 'O') {
              gameBoard.updateBoard(i, j, mark);
              marksMade.push(userInput);
              x = false;
              break;
            }
          }
        }
        if (x) {
          userInput = prompt('That space is not available, please enter again:');
        }
      }
    }
  }

}

const gameController = (() => {
  gameBoard.render();

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

  const checkBoard = function(player) {
    let marksMade = player.marksMade.slice();
    const winCombos = ['123', '456', '789', '147', '258', '369', '159', '357'];
    let counter = 0;
    const marksMadeLength = marksMade.length;

    for (let i = 0; i < winCombos.length; i++) {
      for (let j = 0; j < marksMadeLength; j++) {
        if (winCombos[i].includes(marksMade[0])) {
          counter++;
        }
        marksMade.splice(0, 1);
      }
      if (counter === 3) {
        break;
      } else {
        counter = 0;
      }
      marksMade = player.marksMade.slice();
    }

    if (counter === 3) {
      console.log(player.name + ' wins!');

      return 1;
    } else {
      return 0;
    }
  }

  // note: need to figure out how to end game when a player wins
  // note 2: fixed issue where player array kept getting re-referenced in checkBoard function. Still need to fix proper winning conditions.

  let x = 0; // this loop goes through the turns of the players and ends in a win or tie
  for (let i = 0; i < 5; i++) {
    player1.inputMark(player1.mark);
    x = checkBoard(player1);
    if (x === 1) {
      break;
    }

    if (i === 4) {
      console.log("It's a tie!");
      break;
    }

    player2.inputMark(player2.mark);
    x = checkBoard(player2);
    if (x === 1) {
      break;
    }
  }

})();
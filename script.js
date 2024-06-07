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
    },
    updateBoard: (row, col, mark) => {
      board[row][col] = mark;
      gameBoard.render();
    }
  }

})();

function Player() {

}

const gameController = (() => {
  gameBoard.render();

  gameBoard.updateBoard(0, 0, 'X');
})();
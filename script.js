const gameBoard = (() => {
  let array = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];

  const render = () => {
    for (let i = 0; i < array.length; i++) {
        const square = document.querySelector(`div[data-index='${i}']`);
        square.textContent = array[i];
    }
  }

  return { render };
})();

const Player = () => {
    // const mark = mark;

    // return { mark };
}

const displayController = (() => {

})();

gameBoard.render();
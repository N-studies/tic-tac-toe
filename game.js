/* ------Players------*/

const player = (name, mark) => {
  return { name, mark };
};

const playerOne = player("Player One", "X");
const playerTwo = player("Plater Two", "O");
/*------Board------*/

const gameBoard = (() => {
  // We will manually fill board for now
  const boardArr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  return { boardArr };
})();

function addMarksToDom(person) {
  //add logic from array to board
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      gameBoard.boardArr[square.dataset.position[0]][
        square.dataset.position[1]
      ] = person.mark;
      console.log(square.dataset.position[0], square.dataset.position[1]);
      square.textContent =
        gameBoard.boardArr[square.dataset.position[0]][
          square.dataset.position[1]
        ];
      square.setAttribute(
        "style",
        "font-size: 60px; display: flex; justify-content:center; align-items:center; font-family: sans-serif;"
      );
      // have to add array
    });
    //square.textContent = gameBoard.boardArr[square.dataset.position[0]][square.dataset.position[1]]
    //square.setAttribute("style", "font-size: 60px; display: flex; justify-content:center; align-items:center; font-family: sans-serif;")
  });
}

function addToArray() {}

console.log(gameBoard);

/*------Game Flow------*/
const controlFlow = () => {
  // Check for winner
// can consolidate this!!!!
  // Check rows
  const allX = (currentValue) => currentValue == "X";
  const allO = (currentValue) => currentValue == "O";
  gameBoard.boardArr.forEach((row) => {
    if (row.every(allX)) {
      console.log("Player 1 won!"); // replace w/ return
    } else if (row.every(allO)) {
      console.log("Player 2 won!");
    } else {
      console.log("No one has won yet!");
    }
  });

  // Check columns
  let columns = gameBoard.boardArr[0].map(
    (_, colIndex) => gameBoard.boardArr.map((row) => row[colIndex]) //transpose
  );
  columns.forEach((column) => {
    if (column.every(allX)) {
      console.log("Player one won!"); // replace w/ return
    } else if (column.every(allO)) {
      console.log("Player two won!");
    } else {
      console.log("No one won!");
    }
  });

  //Check diagonals
  diagonals = [
    [
      gameBoard.boardArr[0][0],
      gameBoard.boardArr[1][1],
      gameBoard.boardArr[2][2],
    ],
    [
      gameBoard.boardArr[0][2],
      gameBoard.boardArr[1][1],
      gameBoard.boardArr[2][0],
    ]
  ];

  diagonals.forEach((diagonal) => {
    if (diagonal.every(allX)) {
      console.log("Player one won!"); // replace w/ return
    } else if (diagonal.every(allO)) {
      console.log("Player two won!");
    } else {
      console.log("No one won!");
    }
  });

  return;
};

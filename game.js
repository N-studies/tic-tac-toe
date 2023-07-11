/* ------Players------*/

const player = (name, mark) => {
  return { name, mark };
};

const playerOne = player("Player One", "X");
const playerTwo = player("Plater Two", "O");
/*------Board------*/

const gameBoard = (() => {
  const boardArr = [
    ["","" ,""],
    ["", "",""],
    ["","" ,""],
  ];

  return { boardArr };
})();

/*------Gameplay------ */
const game = () => {
  const addMarks = (person) => {
    //add logic from array to board
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener(
        "click",
        (e) => {
          e.target.textContent = person.mark;
          gameBoard.boardArr[square.dataset.position[0]][
            square.dataset.position[1]
          ] = person.mark;

          if (person == playerOne) {
            person = playerTwo;
          } else if ((person = playerTwo)) {
            person = playerOne;
          }
          square.setAttribute(
            "style",
            "font-size: 60px; display: flex; justify-content:center; align-items:center; font-family: sans-serif;"
          );
          // Add to Array
        },
        { once: true }
      );
    });
  };
  const checkWinner = () => {
    // Check for winner
    // can consolidate this!!!!
    // Check rows
    let winner = "No Winner";
    const allX = (currentValue) => currentValue == "X";
    const allO = (currentValue) => currentValue == "O";
    gameBoard.boardArr.forEach((row) => {
      if (row.every(allX)) {
        winner = "Player One"; // replace w/ return
      } else if (row.every(allO)) {
        winner = "Player Two";
      }
    });

    // Check columns
    let columns = gameBoard.boardArr[0].map(
      (_, colIndex) => gameBoard.boardArr.map((row) => row[colIndex]) //transpose
    );
    columns.forEach((column) => {
      if (column.every(allX)) {
        winner = "Player One"; // replace w/ return
      } else if (column.every(allO)) {
        winner = "Player Two";
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
      ],
    ];

    diagonals.forEach((diagonal) => {
      if (diagonal.every(allX)) {
        winner = "Player One"; // replace w/ return
      } else if (diagonal.every(allO)) {
        winner = playerTwo;
      }
    });

    if (winner == "No Winner") {
      return "No one won yet";
    } else {
      return `Winner: ${winner}`;
    }
  };

  const clearBoard = () => {
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.textContent = "";
    });
    gameBoard.boardArr.forEach((row) => {
      row.fill("");
    });
  };

  const playerTurns = (player) => {
    addMarks(player);
    //checkWinner();
  };
  return { playerTurns, clearBoard };
};

const play = game();

let startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  play.playerTurns(playerOne);
  play.clearBoard()
  startButton.textContent = "restart"
});

// start with x then switch to o

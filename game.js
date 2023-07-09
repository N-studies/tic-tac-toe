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
    [, ,],
    [, ,],
    [, ,],
  ];

  return { boardArr };
})();

/*
function addMarksToDom(person) {
  //add logic from array to board
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    if (square.textContent == "X") {
      removeEventListener("click", () => {});
    } else if (square.textContent == "O") {
      removeEventListener("click", () => {});
    } else {
      square.addEventListener("click", (e) => {
        e.target.textContent = person.mark;
        square.setAttribute(
          "style",
          "font-size: 60px; display: flex; justify-content:center; align-items:center; font-family: sans-serif;"
        );
        // Add to Array
        gameBoard.boardArr[square.dataset.position[0]][
          square.dataset.position[1]
        ] = person.mark;
      });
    }
  });
} */


/*------Game Flow------*/
/*const checkForWinner = () => {
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
  // return true or false depending on the winner.

  if (winner == "No Winner") {
    return "No one won yet.";
  } else {
    return `Winner: ${winner}`;
  }
}; */

/*------Gameplay------ */
const game = () => {
  const addMarks = (person) => {
    //add logic from array to board
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      if (square.textContent == "X") {
        removeEventListener("click", () => {});
      } else if (square.textContent == "O") {
        removeEventListener("click", () => {});
      } else {
        square.addEventListener("click", (e) => {
          e.target.textContent = person.mark;
          square.setAttribute(
            "style",
            "font-size: 60px; display: flex; justify-content:center; align-items:center; font-family: sans-serif;"
          );
          // Add to Array
          gameBoard.boardArr[square.dataset.position[0]][
            square.dataset.position[1]
          ] = person.mark;
        });
      }
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
    // return true or false depending on the winner.

    if (winner == "No Winner") {
      return "No one won yet.";
    } else {
      return `Winner: ${winner}`;
    }
  };
  const playerTurns = (player) => {};
};

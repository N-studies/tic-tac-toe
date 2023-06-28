/* ------Players------*/

const player = (name, mark) => {
  return { name, mark };
};

/*------Board------*/

const gameBoard = (() => {
    // We will manually fill board for now
    const boardArr = [
        "X" , "O", "",
        "" , "X", "",
        "", "" , "O"
    ]

    
    return {boardArr}
})()

function addBoardToDom() {
    document.querySelector(".container")
    
}

console.log(gameBoard)
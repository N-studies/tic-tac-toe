/* ------Players------*/

const player = (name, mark) => {
  return { name, mark };
};

/*------Board------*/

const gameBoard = (() => {
  // We will manually fill board for now
  const boardArr = [["X", "O", " "], [" ", "X", " "], [" ", " ", " "]];
    
 
  return { boardArr };
})();

function addMarksToDom(arr) {
  const container = document.querySelector(".container");
  

}

console.log(gameBoard);

/*------Game Flow------*/
const controlFlow = () => {
  return;
};


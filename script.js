let Player = "X";
let array = Array(9).fill(null);
let st = document.getElementById("Game");
let gameOver = 0;
function checkWinner(Player) {
  if (
    (array[0] !== null &&
      array[0] == array[1] &&
      array[1] !== null &&
      array[1] == array[2]) ||
    (array[3] !== null &&
      array[3] == array[4] &&
      array[4] !== null &&
      array[4] == array[5]) ||
    (array[6] !== null &&
      array[6] == array[7] &&
      array[7] !== null &&
      array[7] == array[8]) ||
    (array[0] !== null &&
      array[0] == array[3] &&
      array[3] !== null &&
      array[3] == array[6]) ||
    (array[1] !== null &&
      array[1] == array[4] &&
      array[4] !== null &&
      array[4] == array[7]) ||
    (array[2] !== null &&
      array[2] == array[5] &&
      array[5] !== null &&
      array[5] == array[8]) ||
    (array[0] !== null &&
      array[0] == array[4] &&
      array[4] !== null &&
      array[4] == array[8]) ||
    (array[2] !== null &&
      array[2] == array[4] &&
      array[4] !== null &&
      array[4] == array[6])
  ) {
    console.log("win");
    st.innerHTML = `${Player} WINNED the GAME!`;
    gameOver = 1;
    return;
  }
}

function handleclick(value) {
  if (gameOver == 0) {
    const id = value.id;
    if (array[id] == null) {
      array[id] = Player;
      value.innerHTML = `${Player}`;
    } else if (array[id] !== null) {
      console.log("Can't edit this");
    }
    checkWinner(Player);

    console.log(array);
    console.log(id);
    if (Player == "X") {
      Player = "O";
    } else if (Player == "O") {
      Player = "X";
    }
  } else if (gameOver == 1) {
    return;
  }
}

function resetGame() {
  // Reset the game state (e.g., clear the grid)
  array = Array(9).fill(null);
  const cells = document.querySelectorAll(".col");
  cells.forEach((cell) => {
    cell.innerHTML = ""; // Remove "X" or "O" from the cells
  });

  currentPlayer = "X";
  gameOver = 0;
  document.getElementById("Game").innerText = ""; // Clear game message
  console.log("button pressed");
}

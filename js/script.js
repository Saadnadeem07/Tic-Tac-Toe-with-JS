// Tic Tac Toe — vanilla JavaScript game logic.

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

// DOM references
const boardEl = document.getElementById("board");
const cells = Array.from(document.querySelectorAll(".cell"));
const statusEl = document.getElementById("status");
const resetBtn = document.getElementById("reset");
const scoreEls = {
  X: document.getElementById("score-x"),
  O: document.getElementById("score-o"),
  draw: document.getElementById("score-draw"),
};

// Game state
let board = Array(9).fill(null);
let currentPlayer = "X";
let isGameOver = false;
const scores = { X: 0, O: 0, draw: 0 };

function handleCellClick(event) {
  const cell = event.target.closest(".cell");
  if (!cell || isGameOver) return;

  const index = Number(cell.dataset.index);
  if (board[index] !== null) return; // cell already taken

  placeMark(cell, index);

  const winningCombo = getWinningCombo();
  if (winningCombo) {
    endGame(currentPlayer, winningCombo);
  } else if (board.every((value) => value !== null)) {
    endGame(null); // draw
  } else {
    switchPlayer();
  }
}

function placeMark(cell, index) {
  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer === "X" ? "is-x" : "is-o");
  cell.disabled = true;
}

function getWinningCombo() {
  return WINNING_COMBINATIONS.find(
    ([a, b, c]) =>
      board[a] !== null && board[a] === board[b] && board[a] === board[c]
  );
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusEl.textContent = `Player ${currentPlayer}'s turn`;
}

function endGame(winner, winningCombo) {
  isGameOver = true;
  cells.forEach((cell) => (cell.disabled = true));

  if (winner) {
    scores[winner] += 1;
    scoreEls[winner].textContent = scores[winner];
    statusEl.textContent = `Player ${winner} wins! 🎉`;
    winningCombo.forEach((i) => cells[i].classList.add("is-winner"));
  } else {
    scores.draw += 1;
    scoreEls.draw.textContent = scores.draw;
    statusEl.textContent = "It's a draw!";
  }
}

function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = "X";
  isGameOver = false;
  statusEl.textContent = "Player X's turn";

  cells.forEach((cell) => {
    cell.textContent = "";
    cell.disabled = false;
    cell.classList.remove("is-x", "is-o", "is-winner");
  });
}

boardEl.addEventListener("click", handleCellClick);
resetBtn.addEventListener("click", resetGame);

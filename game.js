const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");
const speedElement = document.getElementById("speed");

const ROW = 20;
const COL = 10;
const SQ = 30;
const defaultColor = "#fff";
const defaultBorder = "#ccc";

let canMove = true;
let speed = 500;
let dropStart = Date.now();
let score = 0;

let board = [];
for (let currentRow = 0; currentRow < ROW; currentRow++) {
    board[currentRow] = [];
    for (let currentCol = 0; currentCol < COL; currentCol++) {
        board[currentRow][currentCol] = defaultColor;
    }
}

drawBoard();

const PIECES = [
    [Z, '#000'],
    [S, '#38df9fn'],
    [T, '#f03fb5'],
    [O, '#f0b83f'],
    [L, '#6df34b'],
    [I, '#f03f3f'],
    [J, '#4b72f3'],
];

let piece = randomPiece();

drop();

document.addEventListener("keydown", CONTROL);
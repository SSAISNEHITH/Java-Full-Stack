const box = document.getElementById("chocolate");
const candy = document.getElementById("candy");
const scoreDisplay = document.getElementById("score");

let x = 100;
let y = 100;
const step = 20;
const movementSpeed = 50; // milliseconds between each movement step
let score = 0;

// Track current direction
let currentDirection = null;
let animationId = null;
let edgeTimeout = null;
let gameOver = false;

const gameOverOverlay = document.getElementById("game-over");
const gameOverText = document.getElementById("game-over-text");

// Place candy randomly
function placeCandy() {
  const maxX = 370; // game-area width - candy size
  const maxY = 370; // game-area height - candy size
  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);
  candy.style.left = randX + "px";
  candy.style.top = randY + "px";
}
placeCandy();

// Track arrow key presses
document.addEventListener("keydown", function (event) {
  if (gameOver) return;

  if (event.code === "ArrowDown") {
    currentDirection = "down";
    event.preventDefault();
    clearEdgeTimeout();
    startMovement();
  } else if (event.code === "ArrowUp") {
    currentDirection = "up";
    event.preventDefault();
    clearEdgeTimeout();
    startMovement();
  } else if (event.code === "ArrowRight") {
    currentDirection = "right";
    event.preventDefault();
    clearEdgeTimeout();
    startMovement();
  } else if (event.code === "ArrowLeft") {
    currentDirection = "left";
    event.preventDefault();
    clearEdgeTimeout();
    startMovement();
  }
});

// Continuous movement function
function startMovement() {
  if (gameOver) return;
  if (animationId) clearTimeout(animationId);

  function moveLoop() {
    if (currentDirection === "down") {
      y += step;
    } else if (currentDirection === "up") {
      y -= step;
    } else if (currentDirection === "right") {
      x += step;
    } else if (currentDirection === "left") {
      x -= step;
    }

    // Keep inside game area
    x = Math.max(0, Math.min(x, 350));
    y = Math.max(0, Math.min(y, 350));

    box.style.left = x + "px";
    box.style.top = y + "px";

    checkCollision();
    checkEdgeTimeout();

    if (currentDirection && !gameOver) {
      animationId = setTimeout(moveLoop, movementSpeed);
    }
  }

  moveLoop();
}

function checkEdgeTimeout() {
  const atLeftEdge = x <= 0 && currentDirection === "left";
  const atRightEdge = x >= 350 && currentDirection === "right";
  const atTopEdge = y <= 0 && currentDirection === "up";
  const atBottomEdge = y >= 350 && currentDirection === "down";
  const reachedEdge = atLeftEdge || atRightEdge || atTopEdge || atBottomEdge;

  if (reachedEdge && !edgeTimeout) {
    edgeTimeout = setTimeout(function () {
      endGame("You didn’t react in time!");
    }, 3000);
  }

  if (!reachedEdge) {
    clearEdgeTimeout();
  }
}

function clearEdgeTimeout() {
  if (edgeTimeout) {
    clearTimeout(edgeTimeout);
    edgeTimeout = null;
  }
}

function endGame(message) {
  gameOver = true;
  currentDirection = null;
  clearEdgeTimeout();

  if (animationId) {
    clearTimeout(animationId);
    animationId = null;
  }

  if (gameOverOverlay) {
    gameOverText.textContent = message;
    gameOverOverlay.classList.add("visible");
  }
}

// Collision detection
function checkCollision() {
  const boxRect = box.getBoundingClientRect();
  const candyRect = candy.getBoundingClientRect();

  if (
    boxRect.left < candyRect.right &&
    boxRect.right > candyRect.left &&
    boxRect.top < candyRect.bottom &&
    boxRect.bottom > candyRect.top
  ) {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    placeCandy();
  }
}
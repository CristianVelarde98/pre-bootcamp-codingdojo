const ramdomWorld = () => {
  const world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 2, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  const rows = world.length;
  const columns = world[0].length;

  for (let row = 1; row < rows - 1; row++) {
    for (let col = 1; col < columns - 1; col++) {
      world[row][col] = Math.floor(Math.random() * 4);
    }
  }

  world[1][1] = 0;

  return world;
};

let world = ramdomWorld();

const worldDict = ["blank", "wall", "sushi", "onigiri"];

const drawWorld = () => {
  let output = "";

  for (let row = 0; row < world.length; row++) {
    output += "<div class = 'row'>";
    for (let i = 0; i < world[row].length; i++) {
      output += "<div class = " + worldDict[world[row][i]] + "></div>";
    }
    output += "</div>";
  }

  document.getElementById("world").innerHTML = output;
};
drawWorld();

const ninjaMan = {
  x: 1,
  y: 1,
};

const drawNinjaman = () => {
  const character = document.getElementById("ninjaman");
  character.style.top = ninjaMan.y * 40 + "px";
  character.style.left = ninjaMan.x * 40 + "px";
};
drawNinjaman();

const score = document.getElementById("scoreValue");
let scoreValue = 0;

document.onkeydown = (event) => {
  kCode = event.keyCode;

  if (kCode === 38 && world[ninjaMan.y - 1][ninjaMan.x] !== 1) {
    ninjaMan.y--;
  }

  if (kCode === 40 && world[ninjaMan.y + 1][ninjaMan.x] !== 1) {
    ninjaMan.y++;
  }

  if (kCode === 37 && world[ninjaMan.y][ninjaMan.x - 1] !== 1) {
    ninjaMan.x--;
  }

  if (kCode === 39 && world[ninjaMan.y][ninjaMan.x + 1] !== 1) {
    ninjaMan.x++;
  }

  let position = world[ninjaMan.y][ninjaMan.x];

  if (position === 2) scoreValue += 10;

  if (position === 3) scoreValue += 5;

  score.textContent = scoreValue;

  world[ninjaMan.y][ninjaMan.x] = 0;
  drawNinjaman();
  drawWorld();
};

const restartGame = () => {
  scoreValue = 0;
  ninjaMan.x = 1;
  ninjaMan.y = 1;
  world = ramdomWorld();
  drawWorld();
  drawNinjaman();
  score.textContent = scoreValue;
};

const restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", restartGame);

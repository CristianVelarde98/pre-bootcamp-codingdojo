let end = false;

const player = {
  left: 450,
  top: 620,
};

const enemies = [
  { left: 350, top: 250 },
  { left: 450, top: 200 },
  { left: 250, top: 200 },
  { left: 550, top: 230 },
];

const missiles = [];

const drawPlayer = () => {
  let content = "";
  content = `<div class="player" style="left: ${player.left}px; top: ${player.top}px"></div>`;
  document.getElementById("players").innerHTML = content;
};

const drawEnemies = () => {
  let content = "";
  for (let i = 0; i < enemies.length; i++) {
    content += `<div class="enemy" style="left: ${enemies[i].left}px; top: ${enemies[i].top}px"></div>`;
  }
  document.getElementById("enemies").innerHTML = content;
};

const moveEnemies = () => {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].top += 3;
  }
};

const removeEnemies = () => {
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].top >= 660) {
      enemies.splice(i, 1);
      i--;
    }
  }
};

const drawMissiles = () => {
  let content = "";
  for (let i = 0; i < missiles.length; i++) {
    content += `<div class="missile" style="left: ${missiles[i].left}px; top: ${missiles[i].top}px"></div>`;
  }
  document.getElementById("missiles").innerHTML = content;
};

const moveMissiles = () => {
  for (let i = 0; i < missiles.length; i++) {
    missiles[i].top -= 10;
  }
};

const removeMissiles = () => {
  for (let i = 0; i < missiles.length; i++) {
    if (missiles[i].top <= 60) {
      missiles.splice(i, 1);
      i--;
    }
  }
};

document.onkeydown = (event) => {
  kcode = event.keyCode;

  if (kcode === 37 && player.left > 0) player.left -= 10;
  if (kcode === 39 && player.left < 840) player.left += 10;
  if (kcode === 38 && player.top > 450) player.top -= 10;
  if (kcode === 40 && player.top < 630) player.top += 10;

  if (kcode === 32) {
    missiles.push({ left: player.left, top: player.top });
    drawMissiles();
  }

  drawPlayer();
};

const detectCollision = () => {
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].top == player.top && enemies[i].left == player.left)
      end = true;
  }
};

const detroyEnemy = () => {
  for (let i = 0; i < missiles.length; i++) {
    const missile = missiles[i];

    for (let j = 0; j < enemies.length; j++) {
      const enemy = enemies[j];

      if (enemy.top == missile.top && enemy.left == missile.left) {
        enemies.splice(j, 1);
        missiles.splice(i, 1);
        i--;
      }
    }
  }
};

const gameLoop = () => {
  if (end || !enemies.length) {
    console.log("se termino el juego");
    return;
  }
  detroyEnemy();

  drawPlayer();

  detectCollision();

  moveEnemies();
  drawEnemies();
  removeEnemies();

  moveMissiles();
  drawMissiles();
  removeMissiles();

  setTimeout(gameLoop, 50);
};
gameLoop();

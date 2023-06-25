const player = {
  left: 450,
  top: 620,
};

const enemies = [
  { left: 350, top: 250 },
  { left: 450, top: 250 },
  { left: 250, top: 250 },
  { left: 550, top: 250 },
];

const drawPlayer = () => {
  let content = "";
  content = `<div class="player" style="left: ${player.left}px; top: ${player.top}px"></div>`;
  document.getElementById("players").innerHTML = content;
};
drawPlayer();

const drawEnemies = () => {
  let content = "";
  for (let i = 0; i < enemies.length; i++) {
    content += `<div class="enemy" style="left: ${enemies[i].left}px; top: ${enemies[i].top}px"></div>`;
  }
  document.getElementById("enemies").innerHTML = content;
};
drawEnemies();

document.onkeydown = (event) => {
  kcode = event.keyCode;

  if (kcode === 37 && player.left > 0) player.left -= 10;
  if (kcode === 39 && player.left < 840) player.left += 10;
  if (kcode === 38 && player.top > 450) player.top -= 10;
  if (kcode === 40 && player.top < 630) player.top += 10;

  drawPlayer();
};

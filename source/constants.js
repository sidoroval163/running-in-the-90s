export const isCrash = {
  firstEnemy: false,
  secondEnemy: false,
  thirdCar: false,
  playerCar: false,
};

export const hiScore = localStorage.getItem("hiScore");

export const HTML = {
  life1: document.getElementById("life1"),
  life2: document.getElementById("life2"),
  life3: document.getElementById("life3"),
  life4: document.getElementById("life4"),
  startLogo: document.getElementById("startLogo"),
  startButton: document.getElementById("startButton"),
  realStart: document.getElementById("realStart"),
  scoreWindow: document.getElementById("score"),
  hiScoreWindow: document.getElementById("hiScore"),
  left: document.getElementById("left"),
  right: document.getElementById("right"),
};

export const gameConfig = {
  startCrashDanger: 395,
  endCrashDanger: 605,
  fistEnemyStartPos: -175,
  secondEnemyStartPos: -505,
  thirdEnemyStartPos: -835,
  hiScoreNumber: parseInt(hiScore, 10),
};

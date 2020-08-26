import "./style.css";

import {
  fistEnemy,
  secondEnemy,
  thirdEnemy,
  car,
  enemyNumbers,
  audio,
  crashAudio,
} from "./instance";
import {
  drawBackground,
  drawBang,

  roadDrawer,
} from "./utils/drawers";
import {
  isCrash,
  HTML,
  gameConfig,
  hiScore,
} from "./constants";
import setHandlers from "./utils/handlers";

setHandlers();
let isGameStarted = false;
let score = 0;
let speed = 400;
let speedupisrun = false;

const crashController = () => {
  const { position } = car;
  const { startCrashDanger, endCrashDanger } = gameConfig;

  switch (position) {
    case "left":
      if (isCrash.fistEnemy && !enemyNumbers.randomFistNumber) {
        isCrash.playerCar = true;
        isGameStarted = false;
      }
      if (isCrash.secondEnemy && !enemyNumbers.randomSecondNumber) {
        isCrash.playerCar = true;
        isGameStarted = false;
      }
      if (isCrash.thirdEnemy && !enemyNumbers.randomThirdNumber) {
        isCrash.playerCar = true;
        isGameStarted = false;
      }

      break;
    case "right":

      if (isCrash.fistEnemy && enemyNumbers.randomFistNumber) {
        isCrash.playerCar = true;
        isGameStarted = false;
      }

      if (isCrash.secondEnemy && enemyNumbers.randomSecondNumber) {
        isCrash.playerCar = true;
        isGameStarted = false;
      }

      if (isCrash.thirdEnemy && enemyNumbers.randomThirdNumber) {
        isCrash.playerCar = true;
        isGameStarted = false;
      }

      break;
    default:
      break;
  }

  if (fistEnemy.y === startCrashDanger) {
    isCrash.fistEnemy = true;
  }
  if (secondEnemy.y === startCrashDanger) {
    isCrash.secondEnemy = true;
  }
  if (thirdEnemy.y === startCrashDanger) {
    isCrash.thirdEnemy = true;
  }
  if (fistEnemy.y === endCrashDanger) {
    isCrash.fistEnemy = false;
  }
  if (secondEnemy.y === endCrashDanger) {
    isCrash.secondEnemy = false;
  }
  if (thirdEnemy.y === endCrashDanger) {
    isCrash.thirdEnemy = false;
  }
};

const functionsGamePack = () => {
  car.drawCarLeft();
  car.drawCarRight();
  roadDrawer();
  fistEnemy.enemyDraw("randomFistNumber");
  secondEnemy.enemyDraw("randomSecondNumber");
  thirdEnemy.enemyDraw("randomThirdNumber");
};

const scoreCounter = () => {
  score += 10;
  if (!hiScore) {
    localStorage.setItem("hiScore", 0);
    gameConfig.hiScoreNumber = score;
    HTML.scoreWindow.innerHTML = `score:${score}`;
    HTML.hiScoreWindow.innerHTML = `Hi-Score:${gameConfig.hiScoreNumber}`;
  }
  if (gameConfig.hiScoreNumber <= score) {
    gameConfig.hiScoreNumber = score;
    localStorage.setItem("hiScore", score);
  }
};

let lives = 4;
const liveController = () => {
  lives -= 1;

  switch (lives) {
    case 3:
      HTML.life4.classList.add("disable");

      break;
    case 2:
      HTML.life3.classList.add("disable");

      break;
    case 1:
      HTML.life2.classList.add("disable");

      break;

    case 0:
      score = 0; lives = 4;
      HTML.life2.classList.remove("disable");
      HTML.life3.classList.remove("disable");
      HTML.life4.classList.remove("disable");

      break;

    default:
      break;
  }
};

const speedupController = () => {
  setTimeout(() => { speedupisrun = true; speedupController(); }, 5000);
};

const CrazyspeedupController = () => {
  setTimeout(() => { speedupisrun = true; speedupController(); speed = 101; }, 12500);
};

const fpsEngine = () => {
  const runFunc = setInterval(() => {
    const stopall = () => { clearInterval(runFunc); };

    if (speedupisrun && speed > 100) {
      speed -= 70;
      stopall();
      fpsEngine();
      speedupisrun = false;
    }

    if (!isCrash.playerCar) {
      functionsGamePack();
      scoreCounter();
    } else if (isCrash.playerCar) {
      fistEnemy.y = gameConfig.fistEnemyStartPos;
      secondEnemy.y = gameConfig.secondEnemyStartPos;
      thirdEnemy.y = gameConfig.thirdEnemyStartPos;
      isCrash.fistEnemy = false;
      isCrash.secondEnemy = false;
      isCrash.thirdEnemy = false;
      speed = 400;
      stopall();
      audio.pause();
      crashAudio.play();
      liveController();
    }
  }, speed);
};

const timer = () => {
  drawBackground();
  enemyNumbers.spawner("randomFistNumber");
  enemyNumbers.spawner("randomSecondNumber");
  enemyNumbers.spawner("randomThirdNumber");
  audio.play();
  fpsEngine();
};

const startGame = () => {
  if (!isGameStarted) {
    speedupController();
    isCrash.playerCar = false;
    HTML.startLogo.classList.add("disable");
    timer();
    isGameStarted = true;
  }
};
const startRealGame = () => {
  if (!isGameStarted) {
    CrazyspeedupController();
    isCrash.playerCar = false;
    HTML.startLogo.classList.add("disable");
    timer();
    isGameStarted = true;
  }
};

HTML.startButton.addEventListener("click", startGame);
HTML.realStart.addEventListener("click", startRealGame);

const crashEvent = () => {
  HTML.scoreWindow.innerHTML = `score:${score}`;
  HTML.hiScoreWindow.innerHTML = `Hi-Score:${gameConfig.hiScoreNumber}`;
  crashController();
  drawBang();
};

setInterval(() => crashEvent(), 10);

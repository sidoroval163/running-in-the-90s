import { car } from "../instance";
import {
  isCrash,
  HTML,
} from "../constants";

const keyDownHandler = ({ code }) => {
  if (!isCrash.playerCar) {
    switch (code) {
      case "ArrowLeft":
        car.moveCarLeft();

        break;
      case "ArrowRight":
        car.moveCarRight();

        break;
      default:
        break;
    }
  }
};

const clickLeftHandler = () => {
  if (!isCrash.playerCar) {
    car.moveCarLeft();
  }
};

const clickRightHandler = () => {
  if (!isCrash.playerCar) {
    car.moveCarRight();
  }
};

const setHandlers = () => {
  HTML.left.addEventListener("click", clickLeftHandler);
  HTML.right.addEventListener("click", clickRightHandler);
  document.addEventListener("keydown", keyDownHandler);
};

export default setHandlers;

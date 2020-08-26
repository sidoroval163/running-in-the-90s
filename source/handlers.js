import { car }
  from
  "./drawers";

const keyDownHandler = ({ code }) => {
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
};

export { keyDownHandler };

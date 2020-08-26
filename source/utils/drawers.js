import {
  isCrash,

} from "../constants";

const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

const drawBackground = () => {
  const DisplayHeight = 600;
  const DisplayWidth = 300;
  const pixelStep = 30;
  ctx.fillStyle = "rgb(121, 118, 118)";
  for (let y = 5; y < DisplayHeight; y += pixelStep) {
    for (let x = 5; x < DisplayWidth; x += pixelStep) {
      ctx.fillRect(x, y, 25, 25);
      ctx.clearRect(x + 5, y + 5, 15, 15);
      ctx.fillRect(x + 8, y + 8, 9, 9);
    }
  }
};

const block = {
  x: 5,
  y: -295,
  roadHeight: 30,
  eachHollowBlock: 4,
  frameStep: 30,
  drawBlock: () => {
    let { y } = block;
    for (let i = 0; i < block.roadHeight; i += 1) {
      if (i === 0 || i % block.eachHollowBlock === 0) {
        ctx.fillStyle = "rgb(121, 118, 118)";
      } else {
        ctx.fillStyle = "black";
      }
      ctx.fillRect(5, y, 25, 25);
      ctx.clearRect(10, y + 5, 15, 15);
      ctx.fillRect(13, y + 8, 9, 9);
      ctx.fillRect(275, y, 25, 25);
      ctx.clearRect(280, y + 5, 15, 15);
      ctx.fillRect(283, y + 8, 9, 9);
      y += block.frameStep;
    }
  },

};

const bang = {
  x: 5,
  y: 5,
  i: 0,
  pixelStep: 30,
  oneColumnBoxesCnt: 21,
  startYposition: 5,
  allCreatedBlocks: 208,

};

const drawBang = () => {
  if (isCrash.playerCar) {
    if (bang.i % bang.oneColumnBoxesCnt === 0 && bang.i !== 0) {
      bang.x += bang.pixelStep; bang.y = bang.startYposition;
    } else if (bang.i === bang.allCreatedBlocks || bang.i > bang.allCreatedBlocks) {
      bang.i = 0;
      bang.y = 5;
      bang.x = 5;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(bang.x, bang.y, 25, 25);
    ctx.clearRect(bang.x + 5, bang.y + 5, 15, 15);
    ctx.fillRect(bang.x + 8, bang.y + 8, 9, 9);

    bang.y += bang.pixelStep;
    bang.i += 1;
  } else {
    bang.i = 0;
    bang.y = 5;
    bang.x = 5;
  }
};

const roadDrawer = () => {
  const { y } = block;
  if (block.y < 5) {
    block.y += 30; block.drawBlock(y);
  } else { block.y = -235; block.y += 30; block.drawBlock(y); }
};

export {
  drawBackground,
  block,
  drawBang,
  roadDrawer,
  ctx,
};

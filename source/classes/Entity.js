/* eslint-disable no-unused-expressions */
export default class Entity {
  constructor(x, y, ctx, position, isCar, enemyNumbers) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.position = position;
    this.colorLeft = "black";
    this.colorRight = "rgb(121, 118, 118)";
    this.isCar = isCar;
    this.coordOfEndDraw = 705;
    this.frameStep = 30;
    this.coordOfStartDraw = -265;
    this.enemyNumbers = enemyNumbers;
  }

  clearLeftEnemy() {
    this.ctx.fillStyle = "rgb(121, 118, 118)";
    this.render(0);
  }

  drawLeftEnemy() {
    this.ctx.fillStyle = "black";
    this.render(0);
  }

  drawRightEnemy() {
    this.ctx.fillStyle = "black";
    this.render(90);
  }

  clearRightEnemy() {
    this.ctx.fillStyle = "rgb(121, 118, 118)";
    this.render(90);
  }

  drawCarLeft() {
    this.ctx.fillStyle = this.colorLeft;
    this.render(0);
  }

  drawCarRight() {
    this.ctx.fillStyle = this.colorRight;
    this.render(90);
  }

  moveCarRight() {
    this.position = "right";
    this.colorLeft = "rgb(121, 118, 118)";
    this.colorRight = "black";
    this.drawCarLeft();
    this.drawCarRight();
  }

  moveCarLeft() {
    this.position = "left";
    this.colorLeft = "black";
    this.colorRight = "rgb(121, 118, 118)";
    this.drawCarLeft();
    this.drawCarRight();
  }

  enemyDraw(key) {
    this.enemyNumbers[key] ? this.clearRightEnemy() : this.clearLeftEnemy();
    this.y += this.frameStep;
    this.enemyNumbers[key] ? this.drawRightEnemy() : this.drawLeftEnemy();

    if (this.y >= this.coordOfEndDraw) {
      this.y = this.coordOfStartDraw;
      this.enemyNumbers.spawner(key);
    }
  }

  render(shift) {
    const direction60 = this.isCar ? -60 : 0;
    const direction120 = this.isCar ? -120 : 0;
    const direction180 = this.isCar ? -180 : 0;

    this.ctx.fillRect(this.x + shift, this.y, 25, 25);
    this.ctx.clearRect(this.x + shift + 5, this.y + 5, 15, 15);
    this.ctx.fillRect(this.x + shift + 8, this.y + 8, 9, 9);

    this.ctx.fillRect(this.x + shift + 60, this.y, 25, 25);
    this.ctx.clearRect(this.x + shift + 65, this.y + 5, 15, 15);
    this.ctx.fillRect(this.x + shift + 68, this.y + 8, 9, 9);

    this.ctx.fillRect(this.x + shift + 30, this.y + direction60 + 30, 25, 25);
    this.ctx.clearRect(this.x + shift + 35, this.y + direction60 + 35, 15, 15);
    this.ctx.fillRect(this.x + shift + 38, this.y + direction60 + 38, 9, 9);

    this.ctx.fillRect(this.x + shift + 30, this.y + direction120 + 60, 25, 25);
    this.ctx.clearRect(this.x + shift + 35, this.y + direction120 + 65, 15, 15);
    this.ctx.fillRect(this.x + shift + 38, this.y + direction120 + 68, 9, 9);

    this.ctx.fillRect(this.x + shift + 30, this.y + direction180 + 90, 25, 25);
    this.ctx.clearRect(this.x + shift + 35, this.y + direction180 + 95, 15, 15);
    this.ctx.fillRect(this.x + shift + 38, this.y + direction180 + 98, 9, 9);

    this.ctx.fillRect(this.x + shift, this.y + direction120 + 60, 25, 25);
    this.ctx.clearRect(this.x + shift + 5, this.y + direction120 + 65, 15, 15);
    this.ctx.fillRect(this.x + shift + 8, this.y + direction120 + 68, 9, 9);

    this.ctx.fillRect(this.x + shift + 60, this.y + direction120 + 60, 25, 25);
    this.ctx.clearRect(this.x + shift + 65, this.y + direction120 + 65, 15, 15);
    this.ctx.fillRect(this.x + shift + 68, this.y + direction120 + 68, 9, 9);
  }
}

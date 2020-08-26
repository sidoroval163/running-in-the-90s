export default class EnemyNumbers {
  constructor() {
    this.randomFistNumber = 0;
    this.randomSecondNumber = 0;
    this.randomThirdNumber = 0;
  }

  spawner(key) {
    this[key] = Math.floor(Math.random() * Math.floor(2));
  }
}

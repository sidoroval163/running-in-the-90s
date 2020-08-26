export default class AudioModule {
  constructor({ preload, src }) {
    this.src = src;
    this.preload = preload;
    this.audio = new Audio();
  }

  init() {
    this.audio.preload = this.preload;
    this.audio.src = this.src;
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }
}

import Entity from "./classes/Entity";
import EnemyNumbers from "./classes/EnemyNumbers";
import AudioModule from "./classes/AudioModule";
import { ctx } from "./utils/drawers";

export const enemyNumbers = new EnemyNumbers();
export const fistEnemy = new Entity(65, -175, ctx, false, false, enemyNumbers);
export const secondEnemy = new Entity(65, -505, ctx, false, false, enemyNumbers);
export const thirdEnemy = new Entity(65, -835, ctx, false, false, enemyNumbers);
export const car = new Entity(65, 575, ctx, "left", true, false);
export const audio = new AudioModule({ preload: "auto", src: "./music/race.mp3" });
export const crashAudio = new AudioModule({ preload: "auto", src: "./music/crash.mp3" });

audio.init();
crashAudio.init();

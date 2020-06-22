import { Application } from 'pixi.js';
import config from './config';
import Game from './Game';

const { width, height } = config.display;
const app = new Application({ width, height, backgroundColor: 0xE0E0E0 });
const game = new Game(app);

//
window.onload = () => {
  game.start();
};

const container = document.querySelector('#app-root');
container.appendChild(app.view);

import { Container } from 'pixi.js';
import config from '#root/config/';
import Grid from '#root/Game/Grid';
import IView from './IView';


class GamePlay extends Container {
  app: any;
  grid: any;
  tetromino: any;
  tetrominoSpeed: number;
  tetromnoTimer: number;
  renderer: any;

  constructor(app: object) {
    super();

    this.app = app;
    this.grid = new Grid();
    this.addChild(this.grid);

    this.start();
  };
  
  // Get full rows from grid
  // Clear a full row and move down other pieces

  start() {
    this.grid.setCell(8, 0, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(8, 1, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(8, 2, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(8, 3, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(8, 5, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(9, 1, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(9, 2, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(9, 4, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(9, 5, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(10, 0, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(10, 1, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(10, 2, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(10, 3, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(10, 4, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(10, 5, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(11, 0, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(11, 1, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(11, 2, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(11, 3, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(11, 4, { color: 0xCCA4A4, state: 1 });
    this.grid.setCell(11, 5, { color: 0xCCA4A4, state: 1 });
  };

  stop() {

  };

  gameover() {
    this.stop();
  };

  update() {

  };
};

export default GamePlay;

import { Container } from 'pixi.js';
import config from '#root/config/';
import Grid from '#root/Game/Grid';


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
    this.grid.setCells([[8, 0], [8, 1], [8, 2], [8, 3], [8, 5]], { color: 0xFFA4A4, state: 1 });
    this.grid.setCells([[9, 1], [9, 2], [9, 4], [9, 5]], { color: 0xFFA4A4, state: 1 });
    this.grid.setCells([[10, 0], [10, 1], [10, 2], [10, 3], [10, 4] , [10, 5]], { color: 0xFFA4A4, state: 1 });
    this.grid.setCells([[11, 0], [11, 1], [11, 2], [11, 3], [11, 4] , [11, 5]], { color: 0xFFA4A4, state: 1 });

    // After setting cells return each row that is full.

    // When tetromino collides
      // Lock the tetromino
      // Set tetromino to null
      // Use setCells which returns each full row
      // If there are any full rows
      // Clean those rows
      
      // Spawn new tetromino
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

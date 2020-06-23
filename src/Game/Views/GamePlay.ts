import { Container } from 'pixi.js';
import config from '#root/config/';
import Grid from '#root/Game/Grid';
import Renderer from '#root/Game/Renderer';
import { Tetromino, TetrominoType } from '#root/Game/Tetromino';
import { CellState } from '../Grid/Cell';

class GamePlay extends Container {
  app: any;
  grid: any;
  tetromino: any;
  tetrominoSpeed: number;
  tetrominoTimer: number;
  renderer: any;

  constructor(app: object) {
    super();

    this.app = app;
    this.grid = new Grid();

    this.tetromino = new Tetromino(TetrominoType.VADER);
    this.tetrominoSpeed = config.game.speed;
    this.tetrominoTimer = this.tetrominoSpeed;

    this.renderer = new Renderer();
    this.addChild(this.renderer);

    this.start();
  };

  start() {
    const positions: number[][] = [[7, 0], [7, 1], [8, 0], [8, 2], [9, 0], [9, 1], [9, 2], [10, 0], [10, 1], [10, 2], [11, 1], [11, 2]];
    const fullRows = this.grid.setCells(positions, { color: 0xFFA4A4, state: CellState.OCCUPIED });

    if (fullRows.length > 0) {
      setTimeout(() => { this.grid.clearRows(fullRows); }, 2000);
    };
  };

  stop() {

  };

  gameover() {
    this.stop();
  };

  update() {
    this.renderer.updateGrid(this.grid);

    if (this.tetromino) {
      this.tetrominoTimer -= 1;

      if (this.tetrominoTimer <= 0) {
        const collided = this.grid.collision(this.tetromino, 1, 0);

        if (collided) {

          // this.tetromino = new Tetromino(TetrominoType.PLOW);
          this.gameover()
        } else {
          this.tetromino.row++;
        }

        this.tetrominoTimer = this.tetrominoSpeed;
      }

      this.renderer.updateTetromino(this.tetromino);
    }
  };
};

export default GamePlay;

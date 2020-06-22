import { Container } from 'pixi.js';
import config from '#root/config/';
import Renderer from '#root/Game/Renderer';
import Grid from '#root/Game/Grid';
import { Tetromino, TetrominoType } from '#root/Game/Tetromino';

class Game extends Container {
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

    console.log(this.tetrominoTimer);

    this.renderer = new Renderer();
    this.addChild(this.renderer);
  };

  start() {
    const tetromino = new Tetromino(TetrominoType.VADER);
    tetromino.row = 0;
    tetromino.col = 0;

    this.tetromino = tetromino;
  };

  stop() {
    this.app.ticker.stop();
  };

  gameover() {
    this.stop();
  };

  collision(offsetRow: number, offsetCol: number) {
    const positions = this.tetromino.getGlobalPos(offsetRow, offsetCol);

    return positions.some((position: { row: number, col: number }) => {
      if (position.row >= this.grid.rows) return true;
      if (position.col < 0 || position.col > this.grid.col) return true; 

      return this.grid.cells[position.row][position.col];
    });
  };

  spawn() {
    const types: string[] = Object.keys(TetrominoType);
    const typeId: number = Math.floor(Math.random() * types.length);
    const type: string = types[typeId];

    this.tetromino = new Tetromino(TetrominoType[type]);
    
    const collided = this.collision(0, 0);
    
    if (collided) {
      console.log('GAME OVER');
      this.lock();
      this.gameover();
    }
  };

  lock() {
    const currPositions = this.tetromino.getGlobalPos(0, 0);
    this.grid.occupy(currPositions);
    this.tetromino = null;

    const fullRows = this.grid.getFullRows();

    if (fullRows.length > 0) {
      this.grid.clearRows(fullRows);
    }
  };

  update() {
    // Draw sprites for each grid on the map

    // 1. Update tetromino position
    // 2. Update board grids
    // 3. Updatee tetromino grids
    this.renderer.renderBoard(this.grid.cells);

    if (this.tetromino) {
      this.tetrominoTimer -= 1;

      if (this.tetrominoTimer <= 0) {
        const collided = this.collision(1, 0);

        if (collided) {
          this.lock();
          this.spawn();
        } else {
          this.tetromino.row++;
        }

        this.tetrominoTimer = this.tetrominoSpeed;
      }

      
      this.renderer.renderTetromino(this.tetromino);
    }
  };
};

export default Game;

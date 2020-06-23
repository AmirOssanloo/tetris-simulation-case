import { Container } from 'pixi.js';
import config from '#root/config/';
import Cell from './Cell';

class Renderer extends Container {
  rows: number;
  cols: number;
  cells: any[][];

  constructor() {
    super();

    this.rows = config.game.rows;
    this.cols = config.game.cols;
    this.cells = [];

    for (let i = 0; i < this.rows; i++) {
      const row: any = [];

      for (let j = 0; j < this.cols; j++) {
        const cell = new Cell(i, j);
        this.addChild(cell);
        row.push(cell);
      }

      this.cells.push(row);
    }
  };

  updateGrid(grid: any) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const color = grid.cells[i][j].state ? 0xFF0000 : 0x00FF00;
        const cell = this.cells[i][j];
        
        cell.setColor(color);
      }
    }
  };

  updateTetromino(tetromino: any) {
    const positions: number[][] = tetromino.getGlobalPos();

    positions.forEach((position: number[]) => {
      const row = position[0];
      const col = position[1];
      const cell = this.cells[row][col];

      cell.setColor(tetromino.type.color);
    });
  }
};

export default Renderer;

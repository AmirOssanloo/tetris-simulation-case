import { Container } from 'pixi.js';
import config from '#root/config';
import { Cell } from './Cell';

class Grid extends Container {
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

  setCells() {

  };

  setCell(row: number, col: number, values: { color: number, state: number }) {
    const cell = this.cells[row][col];
    const { color, state } = values;
    
    if (color) cell.setColor(color);
    if (state) cell.setState(state);
  };

  getFullRows() {

  };

  clearFullRows() {
    // [3, 2] Row nr 3 and 2
    // [2, 3] Sorted to 2 and 3

    // this.grid.splice(1, 1) to remove row
        // Create empty row

    // this.grid.splice(0, 1) to remove row
        // Create empty row

    // Add new rows to the beginning with
    // Array.prototype.unshift.apply(this.grid, emptyRows);
  };
};

export default Grid;

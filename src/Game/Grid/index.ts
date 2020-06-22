import config from '#root/config/';
import CellState from './Cell/CellState';

class Grid {
  cols: number = config.game.cols;
  rows: number = config.game.rows;
  cells: number[][] = [];

  constructor() {
    for (let i = 0; i < this.rows; i++) {
      let row = [];

      for (let j = 0; j < this.cols; j++) {
        row.push(CellState.AVAILABLE);
      }

      this.cells.push(row);
    }
  };

  getFullRows() {
    return this.cells.filter(row => {
      return row.every(cell => cell === CellState.OCCUPIED);
    });
  };

  clearRows(cells: { row: number, col: number}[]) {
    console.log(cells);
    cells.forEach(({ row, col }) => {
      this.cells[row][col] = CellState.AVAILABLE;
    });
  };

  occupy(cells: { row: number, col: number}[]) {
    cells.forEach(({ row, col }) => {
      this.cells[row][col] = CellState.OCCUPIED;
    });
  };
}

export default Grid;

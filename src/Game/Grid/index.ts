import config from '#root/config';
import { Position } from '#root/types';
import { Cell } from './Cell';

class Grid {
  rows: number;
  cols: number;
  cells: any[][];

  constructor() {
    this.rows = config.game.rows;
    this.cols = config.game.cols;
    this.cells = [];

    for (let i = 0; i < this.rows; i++) {
      const row: any = [];

      for (let j = 0; j < this.cols; j++) {
        const cell = new Cell();
        row.push(cell);
      }

      this.cells.push(row);
    }
  };

  setCells(positions: Position[], values: { color?: number, state?: number }) {
    positions.forEach((pos: number[]) => {
      const row = pos[0];
      const col = pos[1];

      const cell = this.cells[row][col];
      const { color, state } = values;

      console.log(cell);

      if (color) cell.color = color;
      if (state) cell.state = state;
    });

    return this.getFullRows(positions);
  };

  collision(tetromino: any, offsetRow: number = 0, offsetCol: number = 0) {
    const positions = tetromino.getGlobalPos(offsetRow, offsetCol);

    return positions.some((position: number[]) => {
      const row = position[0];
      const col = position[1];

      if (row >= this.rows) return true;
      if (col < 0 || col > this.cols) return true; 

      return this.cells[row][col].state;
    });
  };

  clearRows(rows: number[]) {
    const sortedRows: number[] = [...rows].filter((a, b) => a - b);
    const newRows: number[] = [];

    for (let i = sortedRows.length - 1; i >= 0 ; i--) {
      this.cells.splice(sortedRows[i], 1)

      const newRow: any = [];

      for (let j = 0; j < this.cols; j++) {
        const cell = new Cell();
        newRow.push(cell);
      }

      newRows.push(newRow);
    }

    Array.prototype.unshift.apply(this.cells, newRows);
  };

  getFullRows(positions: Position[]) {
    let rowsToCheck: number[] = [];

    positions.forEach((pos: number[]) => {
      const index: number = pos[0];

      if (!rowsToCheck[index]) {
        rowsToCheck[index] = index;
      }
    });

    return rowsToCheck
      .filter((item: any) => item !== null)
      .filter(this.isFullRow, this);
  };

  isFullRow(row: number) {
    return this.cells[row].every((cell: any) => cell.state);
  };
};

export default Grid;

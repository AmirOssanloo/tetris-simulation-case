import { Container } from 'pixi.js';
import config from '#root/config';
import { Position } from '#root/types';
import { Cell, CellState } from './Cell';

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

  setCells(positions: Position[], values: { color?: number, state?: number }) {
    positions.forEach((pos: number[]) => {
      const row = pos[0];
      const col = pos[1];

      const cell = this.cells[row][col];
      const { color, state } = values;

      if (color) cell.setColor(color);
      if (state) cell.setState(state);
    });

    return this.getFullRows(positions);
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

  update() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        
      }
    }
  }
};

export default Grid;

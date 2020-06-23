import CellState from './CellState';

class Cell {
  color: number;
  state: number;

  constructor() {
    this.color = 0xFFF1F1;
    this.state = CellState.AVAILABLE;
  };
};

export default Cell;

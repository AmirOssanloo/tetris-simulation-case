import CellState from './CellState';

interface ICell {
  row: number;
  col: number;
  color: number;
  state: number;
}

const Cell: ICell = {
  row: 0,
  col: 0,
  color: 0xF1F1F1,
  state: CellState.AVAILABLE
};

export default Cell;

interface ICellState {
  readonly AVAILABLE: number;
  readonly OCCUPIED: number;
};

const CellState: ICellState = {
  AVAILABLE: 0,
  OCCUPIED: 1
};

export default CellState

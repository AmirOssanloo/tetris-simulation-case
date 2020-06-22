interface CellState {
  readonly AVAILABLE: number;
  readonly OCCUPIED: number;
};

const CellState: CellState = {
  AVAILABLE: 0,
  OCCUPIED: 1
};

export default CellState

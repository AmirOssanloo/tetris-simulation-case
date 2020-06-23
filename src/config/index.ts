interface Cell {
  readonly size: number;
  readonly margin: number;
};

const cell: Cell = {
  size: 48,
  margin: 2
};

interface Game {
  readonly rows: number;
  readonly cols: number;
  readonly speed: number;
};

const game: Game = {
  rows: 12,
  cols: 3,
  speed: 15
};

interface Display {
  readonly width: number;
  readonly height: number;
};

const display: Display = {
  width: game.cols * (cell.size + cell.margin) + cell.margin,
  height: game.rows * (cell.size + cell.margin) + cell.margin,
};

export default {
  cell,
  game,
  display
};

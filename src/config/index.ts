interface ICell {
  readonly size: number;
  readonly margin: number;
};

const cell: ICell = {
  size: 48,
  margin: 2
};

interface IGame {
  readonly cols: number;
  readonly rows: number;
  readonly speed: number;
};

const game: IGame = {
  cols: 3,
  rows: 12,
  speed: 15
};

interface IDisplay {
  readonly width: number,
  readonly height: number
}

const display: IDisplay = {
  width: game.cols * (cell.size + cell.margin) + cell.margin,
  height: game.rows * (cell.size + cell.margin) + cell.margin,
};

export default {
  cell,
  game,
  display
};

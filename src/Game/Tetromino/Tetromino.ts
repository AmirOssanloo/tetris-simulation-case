import TetrominoBlocks from './TetrominoBlocks';

interface ITetromino {
  color: number;
  shape: number[][];
};

interface ICell {
  row: number;
  col: number;
}

class Tetromino {
  type: ITetromino;
  row: number;
  col: number;

  constructor(type: string, row: number = 0, col: number = 0) {
    this.type = TetrominoBlocks[type];
    this.row = row;
    this.col = col;
  };

  getLocalPos() {
    const positions: ICell[] = [];

    this.type.shape.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (col === 1) {
          positions.push({
            row: rowIndex,
            col: colIndex
          });
        }
      });
    });

    return positions;
  };

  getGlobalPos(offsetRow: number = 0, offsetCol: number = 0) {
    const positions: ICell[] = this.getLocalPos();

    return positions.map(pos => {
      return {
        row: pos.row + this.row + offsetRow,
        col: pos.col + this.col + offsetCol
      }
    });
  };

  update() {
    //
  }
};

export default Tetromino;

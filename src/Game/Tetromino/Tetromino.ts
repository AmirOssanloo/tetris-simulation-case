import TetrominoBlocks from './TetrominoBlocks';
import { CellState } from '../Grid/Cell';

type Block = {
  color: number;
  shape: number[][];
};

class Tetromino {
  type: Block;
  row: number;
  col: number;

  constructor(type: string, row: number = 0, col: number = 0) {
    this.type = TetrominoBlocks[type];
    this.row = row;
    this.col = col;
  };


  getGlobalPos(offsetRow: number = 0, offsetCol: number = 0) {
    const positions: number[][] = [];

    for (let i = 0; i < this.type.shape.length; i++) {
      for (let j = 0; j < this.type.shape[i].length; j++) {
        if (this.type.shape[i][j] === CellState.OCCUPIED) {
          const row = i + this.row + offsetRow;
          const col = j + this.col + offsetCol;
          positions.push([row, col]);
        }
      }
    }

    return positions;
  };
};

export default Tetromino;

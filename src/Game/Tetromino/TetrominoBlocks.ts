import TetrominoType from './TetrominoType';

export default {
  [TetrominoType.CORNO]: {
    color: 0xFAFAFA,
    shape: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 0, 0]
    ]
  },
  [TetrominoType.PLONK]: {
    color: 0xEAEAEA,
    shape: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ]
  },
  [TetrominoType.VADER]: {
    color: 0xDADADA,
    shape: [
      [1, 0, 1],
      [0, 1, 0],
      [0, 0, 0]
    ]
  },
  [TetrominoType.PLOW]: {
    color: 0xCACACA,
    shape: [
      [1, 0, 0],
      [0, 1, 1],
      [0, 0, 0]
    ]
  },
  [TetrominoType.ANGIE]: {
    color: 0xBABABA,
    shape: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]
  }
};

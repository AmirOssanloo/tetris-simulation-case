import { Container, Sprite, Texture } from 'pixi.js';
import config from '#root/config/';

class Renderer extends Container {
  rows: number;
  cols: number;
  blocks: any[][] = [];

  constructor() {
    super();

    this.rows = config.game.rows;
    this.cols = config.game.cols;

    const { size, margin } = config.cell;

    for (let i = 0; i < this.rows; i++) {
      const row: any = [];

      for (let j = 0; j < this.cols; j++) {
        let block = new Sprite(Texture.WHITE)
        block.width = size;
        block.height = size;
        block.x = j * (size + margin) + margin; 
        block.y = i * (size + margin) + margin; 
        block.tint = 0xD2F2F2;

        this.addChild(block);
        row.push(block);
      }

      this.blocks.push(row);
    }
  };

  updateBlock(row: number, col: number, color: number) {
    const block = this.blocks[row][col];
    block.tint = color;
  };

  renderBoard(grid: any) {
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        const color = grid[i][j] ? 0xD2C2C2 : 0xD2F2F2;

        this.updateBlock(i, j, color);
      }
    }
  };

  renderTetromino(tetromino: any) {
    

    if (tetromino) {
      tetromino.getGlobalPos().forEach((pos: { row: number; col: number; }) => {
        this.updateBlock(pos.row, pos.col, 0xFF0000);
      });
    }
  };
};

export default Renderer;

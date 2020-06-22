import { Container, Sprite, Texture } from 'pixi.js';
import config from '#root/config/';
import CellState from './CellState';

interface ICell {
  row: number;
  col: number;
  color: number;
  state: number;

  setColor(color: number): void;
  setState(state: number): void;
}

class Cell extends Container implements ICell {
  row: number;
  col: number;
  color: number;
  state: number;
  sprite: any;

  constructor(row: number, col: number) {
    super();

    this.row = row;
    this.col = col;
    this.color = 0xFFF1F1;
    this.state = CellState.AVAILABLE;

    const { size, margin } = config.cell;

    this.sprite = new Sprite(Texture.WHITE);
    this.sprite.width = size;
    this.sprite.height = size;
    this.sprite.x = this.col * (size + margin) + margin;
    this.sprite.y = this.row * (size + margin) + margin;
    this.sprite.tint = this.color;
    this.addChild(this.sprite);
  };

  setColor(color: number) {
    this.color = color;
    this.sprite.tint = this.color;
  };

  setState(state: number) {
    this.state = state;
  };
};

export default Cell;

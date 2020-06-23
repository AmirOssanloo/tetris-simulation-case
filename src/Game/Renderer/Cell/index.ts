import { Container, Sprite, Texture } from 'pixi.js';
import config from '#root/config/';

class Cell extends Container {
  row: number;
  col: number;
  color: number;
  sprite: any;

  constructor(row: number, col: number) {
    super();

    this.row = row;
    this.col = col;
    this.color = 0xFFF1F1;

    const { size, margin } = config.cell;

    this.sprite = new Sprite(Texture.WHITE);
    this.sprite.width = size;
    this.sprite.height = size;
    this.sprite.x = col * (size + margin) + margin;
    this.sprite.y = row * (size + margin) + margin;
    this.setColor(this.color);
    this.addChild(this.sprite);
  };

  setColor(color: number) {
    this.color = color;
    this.sprite.tint = this.color;
  };
};

export default Cell;

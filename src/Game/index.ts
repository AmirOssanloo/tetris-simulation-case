import { GamePlay } from './Views';
import { StateType } from './State';

class Game {
  app: any;
  state: string;
  view: any;

  constructor(app: any) {
    this.app = app;
  };

  start() {
    this.view = new GamePlay(this.app);
    this.state = StateType.GAMEPLAY;
    this.app.stage.addChild(this.view);
    this.app.ticker.add(this.update, this);
  };

  update() {
    this.view.update();
  };
};

export default Game;

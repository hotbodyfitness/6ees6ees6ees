class HoneyMakerBee extends Bee {
  constructor (food, eat, color) {
    super(food, eat, color);
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
    this.makeHoney = () => this.honeyPot++; // not sure if it's ok to return this value
    this.giveHoney = () => this.honeyPot--; // not sure if it's ok to return this value
  }
};

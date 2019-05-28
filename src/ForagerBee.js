class ForagerBee extends Bee {
  constructor(food, eat, color) {
    super(food, eat, color);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
    this.forage = treasure => this.treasureChest.push(treasure);
  }
};
class RetiredForagerBee extends ForagerBee {
  constructor(food, eat) {
    super(food, eat);
    this.color = 'grey';
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.treasureChest = [];
    this.forage = () => 'I am too old, let me play cards instead';
    this.gamble = treasure => this.treasureChest.push(treasure);
  }
};

import Character from './character';

export default class IsStonedCharacter extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.distance = 1;
    this.isStoned = false;
  }

  get updAttack() {
    this.attack = this.distance ? (this.attack *= 1 - 0.1 * this.distance) : 0;
    this.attack = this.isStoned
      ? Math.round(this.attack - Math.log10(this.distance) * 5)
      : this.attack;

    return this.attack;
  }

  set updAttack(value) {
    this.attack =
      value >= 0 && value <= 100 ? (this.attack = value) : (this.attack = 0);
  }

  get stoned() {
    return this.isStoned;
  }

  set stoned(value) {
    this.isStoned = typeof value === 'boolean' ? value : false;
  }
}

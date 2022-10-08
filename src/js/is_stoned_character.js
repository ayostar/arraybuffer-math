import Character from './character';

export default class IsStonedCharacter extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.distance = 1;
    this.isStoned = false;
    this.attack = attack;
  }

  get updAttack() {
    this.attack = this.distance ? (this.attack *= 1 - 0.1 * this.distance) : 0;
    this.attack = this.isStoned
      ? Math.round(this.attack - Math.log10(this.distance) * 5)
      : this.attack;

    return this.attack;
  }

  set updAttack(value) {
    this.attack = value;
  }

  get stoned() {
    return this.isStoned;
  }

  set stoned(value) {
    this.isStoned = value ? value : false;
  }
}

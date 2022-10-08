import IsStonedCharacter from './is_stoned_character';

export default class Daemon extends IsStonedCharacter {
  constructor(name) {
    super(name, 'Daemon', 100, 1, 25, 25);
  }
}

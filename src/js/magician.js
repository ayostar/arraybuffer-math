import IsStonedCharacter from './is_stoned_character';

export default class Magician extends IsStonedCharacter {
  constructor(name) {
    super(name, 'Magician', 100, 1, 10, 40);
  }
}

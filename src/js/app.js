import Team from './team';

import IsStonedCharacter from './is_stoned_character';
import Character from './character';

class Daemon extends IsStonedCharacter {
  constructor(name) {
    super(name, 'Daemon', 100, 1, 25, 25);
  }
}

const myTeam = new Team('Artem123');
console.log(myTeam);

const demon = new Daemon('ВАСЯ');
console.log(demon);

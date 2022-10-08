import Character from './character';

class Team {
  constructor() {
    this.members = new Set();

    const possibleErrorTypesTeam = {
      notUniqueCharacter: 'Такой персонаж уже существует в команде.',
      notInstanceOfCharacter: 'Передан не объект с персонажем',
    };
    this.errors = possibleErrorTypesTeam;
  }

  add(character) {
    if (character instanceof Character) {
      if (this.members.has(character)) {
        throw new Error(this.errors.notUniqueCharacter);
      } else {
        this.members.add(character);
      }
    } else {
      throw new Error(this.errors.notInstanceOfCharacter);
    }
  }

  addAll(...characters) {
    for (const character of characters) {
      if (character instanceof Character && !this.members.has(character)) {
        this.members.add(character);
      }
    }
  }

  toArray() {
    const array = Array.from(this.members);
    this.members = array;
  }
}

export { Team as default };

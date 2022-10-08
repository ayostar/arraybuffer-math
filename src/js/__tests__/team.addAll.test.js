import Team from '../team';
import Zombie from '../Zombie';
import Undead from '../undead';

test('Shoud test class Team - method addAll()', () => {
  const newTeam = new Team();
  const zombie1 = new Zombie('Dimon');
  const zombie2 = new Zombie('DimonPoke');
  const undead1 = new Undead('Undrey');

  const arrayCharacters = [zombie1, zombie2, undead1];
  const expected = new Set(arrayCharacters);

  newTeam.addAll(...arrayCharacters);
  expect(expected).toEqual(newTeam.members);

  arrayCharacters.push({ notinstanceOf: 'Character' });
  newTeam.addAll(...arrayCharacters);

  expect(expected).toEqual(newTeam.members);
});

import Team from '../team';
import Zombie from '../Zombie';
import Undead from '../undead';

test('Shoud test class Team - method toArray()', () => {
  const newTeam = new Team();
  const zombie1 = new Zombie('Dimon');
  const zombie2 = new Zombie('DimonPoke');
  const undead1 = new Undead('Undrey');
  const arrayCharacters = [zombie1, zombie2, undead1];

  newTeam.addAll(...arrayCharacters);
  newTeam.toArray();
  expect(arrayCharacters).toEqual(newTeam.members);
});

import Team from '../team';
import Bowerman from '../bowerman';
import Zombie from '../zombie';

test('Shoult test class Team for unique character - method add()', () => {
  const newTeam = new Team();
  const characterBowerman = new Bowerman('Bonya');
  const characterZombie = new Zombie('Zina');

  const expected = new Set([characterBowerman, characterZombie]);

  newTeam.add(characterBowerman);
  newTeam.add(characterZombie);
  expect(expected).toEqual(newTeam.members);

  try {
    newTeam.add({ notinstanceOf: 'Character' });
  } catch (error) {
    expect(newTeam.errors.notInstanceOfCharacter).toContain(error.message);
  }

  try {
    newTeam.add(characterBowerman);
  } catch (error) {
    expect(newTeam.errors.notUniqueCharacter).toContain(error.message);
  }
});

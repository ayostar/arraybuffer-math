import IsStonedCharacter from '../is_stoned_character';

test('Should test index distance to be 0', () => {
  const characterIsStoned = new IsStonedCharacter('Шок', 'Magician');
  characterIsStoned.distance = 0;
  characterIsStoned.updAttack = 100;
  expect(characterIsStoned.updAttack).toBe(0);
});

test('Should test index distance to be 1', () => {
  const characterIsStoned = new IsStonedCharacter('Шок', 'Magician');
  characterIsStoned.distance = 1;
  characterIsStoned.attack = 100;
  characterIsStoned.updAttack;
  expect(characterIsStoned.updAttack).toBe(81);
});

test('Should test attack while not being stoned', () => {
  const characterIsStoned = new IsStonedCharacter('Шок', 'Daemon');
  characterIsStoned.distance = 2;
  characterIsStoned.attack = 100;
  characterIsStoned.stoned = false;
  expect(characterIsStoned.updAttack).toBe(80);
});

test('Should test attack while being stoned', () => {
  const characterIsStoned = new IsStonedCharacter('Шок', 'Magician');
  characterIsStoned.attack = 3;
  characterIsStoned.distance = 3;
  characterIsStoned.stoned = true;
  expect(characterIsStoned.updAttack).toBeCloseTo(0);
});

test('Shold test isStoned setter', () => {
  const characterIsStoned = new IsStonedCharacter('Шок', 'Magician');
  characterIsStoned.stoned = false;
  expect(characterIsStoned.stoned).toBe(false);
});

test('Shold test isStoned setter', () => {
  const characterIsStoned = new IsStonedCharacter('Шок', 'Magician');
  characterIsStoned.stoned = true;
  expect(characterIsStoned.stoned).toBe(true);
});

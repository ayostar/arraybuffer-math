import Swordsman from '../swordsman';

test.each([
  [
    'Name',
    {
      name: 'Name',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    'Name',
    {
      name: 'Name',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
])(
  'should create hero - "Swordsman", testing class Swordsman',
  (params, recieved) => {
    const expected = new Swordsman(params);

    expect(expected).toEqual(recieved);
  }
);

import Undead from '../undead';

test.each([
  [
    'Name1',
    {
      name: 'Name1',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
  [
    'Name2',
    {
      name: 'Name2',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
])(
  'should create hero - "Undead", testing class Undead',
  (params, recieved) => {
    const expected = new Undead(params);

    expect(expected).toEqual(recieved);
  }
);

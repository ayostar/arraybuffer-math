import Zombie from '../zombie';

test.each([
  [
    'Name1',
    {
      name: 'Name1',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
  [
    'Name123',
    {
      name: 'Name123',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ],
])(
  'should create hero - "Zombie", testing class Zombie',
  (params, recieved) => {
    const expected = new Zombie(params);

    expect(expected).toEqual(recieved);
  }
);

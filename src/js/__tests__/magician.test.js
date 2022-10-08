import Magician from '../magician';

test.each([
  [
    'Name',
    {
      name: 'Name',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
      distance: 1,
      isStoned: false,
    },
  ],
  [
    'Name',
    {
      name: 'Name',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
      distance: 1,
      isStoned: false,
    },
  ],
])(
  'should create hero - "Magician", testing class Magician',
  (params, recieved) => {
    const expected = new Magician(params);
    expect(expected).toEqual(recieved);
  }
);

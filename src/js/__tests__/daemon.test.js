import Daemon from '../daemon';

test.each([
  [
    'Name',
    {
      name: 'Name',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
      distance: 1,
      isStoned: false,
    },
  ],
  [
    'Name',
    {
      name: 'Name',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
      distance: 1,
      isStoned: false,
    },
  ],
])(
  'should create hero - "Daemon", testing class Daemon',
  (params, recieved) => {
    const expected = new Daemon(params);

    expect(expected).toEqual(recieved);
  }
);

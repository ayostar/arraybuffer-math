import Bowerman from '../bowerman';

test.each([
  [
    'Name1',
    {
      name: 'Name1',
      type: 'Bowerman',
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
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  ],
])(
  'should create hero - "Bowerman", testing class Bowerman',
  (params, recieved) => {
    const expected = new Bowerman(params);
    expect(expected).toEqual(recieved);
  }
);

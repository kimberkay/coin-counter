import counter from './../src/counter'

describe('counter', () => {

  test('should correctly check that counter returns 0', () => {
    
    expect(counter(0)).toBe(0);
    expect(counter(1).quarters).toBe([4, 0, 0, 0]);
  });

});
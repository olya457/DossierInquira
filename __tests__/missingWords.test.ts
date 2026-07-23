import {evaluateMissingWord} from '../src/domain/missingWords/evaluateMissingWord';

describe('evaluateMissingWord', () => {
  it('ignores surrounding whitespace and letter case', () => {
    expect(evaluateMissingWord('  Evidence ', 'evidence')).toBe(true);
  });

  it('rejects a different word', () => {
    expect(evaluateMissingWord('witness', 'evidence')).toBe(false);
  });
});


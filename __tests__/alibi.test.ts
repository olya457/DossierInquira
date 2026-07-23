import {analyzeAlibi, defaultAlibiInput} from '../src/data/alibi';

describe('analyzeAlibi', () => {
  it('marks an impossible journey as unlikely', () => {
    const result = analyzeAlibi({
      ...defaultAlibiInput,
      availableMinutes: 10,
      travelMinutes: 25,
      delayMinutes: 5,
      alternativeRoute: false,
    });

    expect(result.kind).toBe('unlikely');
    expect(result.gap).toBe(-20);
  });

  it('requires locations and supporting evidence', () => {
    const result = analyzeAlibi({
      ...defaultAlibiInput,
      lastLocation: '',
      digitalEvidence: 'None',
      notes: '',
    });

    expect(result.kind).toBe('insufficient');
    expect(result.confidence).toBeNull();
  });
});


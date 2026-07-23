import {
  cases,
  evaluateCaseAnswers,
  getCaseById,
} from '../src/domain/cases';

describe('case repository', () => {
  it('contains unique case identifiers', () => {
    const identifiers = cases.map(item => item.id);
    expect(new Set(identifiers).size).toBe(identifiers.length);
  });

  it('finds a case by its identifier', () => {
    const firstCase = cases[0];
    expect(getCaseById(firstCase.id)).toBe(firstCase);
    expect(getCaseById('unknown-case')).toBeUndefined();
  });

  it('evaluates clue answers without depending on a screen', () => {
    const investigationCase = cases[0];
    const correctAnswers = Object.fromEntries(
      investigationCase.clues.map((clue, index) => [index, clue.answer]),
    );

    expect(evaluateCaseAnswers(investigationCase, correctAnswers)).toEqual({
      correct: investigationCase.clues.length,
      total: investigationCase.clues.length,
      solved: true,
    });
  });
});


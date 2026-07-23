import type {ClueAnswer, InvestigationCase} from './models';

export type CaseEvaluation = {
  correct: number;
  total: number;
  solved: boolean;
};

export function evaluateCaseAnswers(
  investigationCase: InvestigationCase,
  answers: Readonly<Record<number, ClueAnswer>>,
): CaseEvaluation {
  const correct = investigationCase.clues.reduce(
    (score, clue, index) => score + (answers[index] === clue.answer ? 1 : 0),
    0,
  );
  return {
    correct,
    total: investigationCase.clues.length,
    solved: correct === investigationCase.clues.length,
  };
}


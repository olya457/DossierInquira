import {readJson, writeJson} from './typedStorage';

export type CompletedChallenge = {
  id: string;
  title: string;
  difficulty: string;
  description: string;
  response: string;
  completedAt: string;
};

function isCompletedChallenge(value: unknown): value is CompletedChallenge {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === 'string' &&
    typeof item.title === 'string' &&
    typeof item.difficulty === 'string' &&
    typeof item.description === 'string' &&
    typeof item.response === 'string' &&
    typeof item.completedAt === 'string'
  );
}

const COMPLETED_CHALLENGES_KEY = 'dossier:completed-challenges';

export function readCompletedChallenges(): Promise<CompletedChallenge[]> {
  return readJson(
    COMPLETED_CHALLENGES_KEY,
    [],
    (value): value is CompletedChallenge[] =>
      Array.isArray(value) && value.every(isCompletedChallenge),
  );
}

export function writeCompletedChallenges(
  items: CompletedChallenge[],
): Promise<void> {
  return writeJson(COMPLETED_CHALLENGES_KEY, items);
}


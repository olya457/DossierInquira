export function evaluateMissingWord(answer: string, expected: string): boolean {
  return answer.trim().toLocaleLowerCase() === expected.trim().toLocaleLowerCase();
}


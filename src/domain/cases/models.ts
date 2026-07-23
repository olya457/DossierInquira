export type CaseDifficulty = 'Easy' | 'Medium' | 'Hard' | 'Expert';
export type ClueAnswer = 'True' | 'Fake' | 'Unclear';

export type CaseSubject = {
  name: string;
  role: string;
};

export type CaseClue = {
  text: string;
  answer: ClueAnswer;
};

export type InvestigationCase = {
  id: string;
  title: string;
  difficulty: CaseDifficulty;
  category: string;
  time: string;
  story: string;
  subjects: CaseSubject[];
  question: string;
  clues: CaseClue[];
  clueByClue: string;
  solution: string;
  takeaway: string;
};

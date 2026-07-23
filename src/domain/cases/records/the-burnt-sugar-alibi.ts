import type {InvestigationCase} from '../models';

export const theBurntSugarAlibi: InvestigationCase = {
    id: 'the-burnt-sugar-alibi',
    title: 'The Burnt Sugar Alibi',
    difficulty: 'Easy',
    category: 'Kitchen Incident',
    time: '5 min',
    story:
      'A pastry chef collapsed shortly before an evening service. A strong burnt-sugar odor filled the kitchen, and several employees assumed she had inhaled smoke from an overheated caramel pan.\nThe emergency ventilation system activated automatically, yet no pan was found on the stove. One assistant claimed the chef had simply fainted from exhaustion.\nA broken bottle was later discovered beneath the preparation table.',
    subjects: [
      {
        name: 'Sofia Marin',
        role: 'The pastry chef',
      },
      {
        name: 'Lena Graves',
        role: 'The assistant pastry chef',
      },
      {
        name: 'Owen Pike',
        role: 'The kitchen porter',
      },
    ],
    question: 'Was the collapse caused by ordinary kitchen smoke?',
    clues: [
      {
        text: 'No caramel residue was found on the stove or cookware.',
        answer: 'True',
      },
      {
        text: 'The broken bottle contained a concentrated food-aroma compound.',
        answer: 'True',
      },
      {
        text: 'Sofia had worked a long shift.',
        answer: 'Unclear',
      },
      {
        text: 'The ventilation alarm proves a real fire occurred.',
        answer: 'Fake',
      },
      {
        text: 'Lena ordered the aroma compound under a false product name.',
        answer: 'True',
      },
    ],
    clueByClue:
      'TRUE — No cooking source\n The expected physical evidence of burnt caramel was absent.\nTRUE — Aroma compound\n The liquid could imitate the smell of overheated sugar without producing a visible fire.\nUNCLEAR — Long shift\n Fatigue may contribute to illness but does not explain the chemical exposure.\nFAKE — Alarm interpretation\n The system responded to airborne particles, not necessarily flames.\nTRUE — Hidden purchase\n The false description shows an attempt to conceal the material’s purpose.',
    solution:
      'Lena spilled a concentrated aroma compound near Sofia’s station after the two argued over a promotion. The vapors triggered the ventilation system and caused Sofia’s respiratory distress.\nThe familiar smell encouraged everyone to assume a routine kitchen accident. The missing caramel residue and disguised purchase exposed the staging.',
    takeaway:
      'A familiar smell can direct attention toward the wrong cause. Sensory impressions must be tested against physical evidence.',
  };

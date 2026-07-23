import type {InvestigationCase} from '../models';

export const theBitterAftertaste: InvestigationCase = {
    id: 'the-bitter-aftertaste',
    title: 'The Bitter Aftertaste',
    difficulty: 'Hard',
    category: 'Recipe Tampering',
    time: '12 min',
    story:
      'A respected chocolatier launched a new tasting collection for investors. Every sample from one tray left a sharp metallic aftertaste, forcing the event to stop.\nThe kitchen team used the same ingredients for all six trays, yet only one was affected. The production chef blamed a defective mixing bowl.\nNo one became seriously ill, but the company’s acquisition negotiations collapsed the next morning.',
    subjects: [
      {
        name: 'Ariane Cole',
        role: 'The chocolatier',
      },
      {
        name: 'Felix Marr',
        role: 'The production chef',
      },
      {
        name: 'Clara Venn',
        role: 'The business partner',
      },
      {
        name: 'Samuel Pike',
        role: 'The equipment supplier',
      },
    ],
    question: 'Was the tasting failure accidental or commercially motivated?',
    clues: [
      {
        text: 'Only the investor tray contained the metallic compound.',
        answer: 'True',
      },
      {
        text: 'The affected tray was plated separately after the others.',
        answer: 'True',
      },
      {
        text: 'The mixing bowl contains scratches and discoloration.',
        answer: 'Unclear',
      },
      {
        text: 'Samuel supplied the bowl six months earlier.',
        answer: 'Unclear',
      },
      {
        text: 'Clara had recently negotiated with a competing buyer.',
        answer: 'True',
      },
      {
        text: 'A vial matching the contaminant was found in Clara’s locked desk.',
        answer: 'True',
      },
      {
        text: 'Felix disliked the investors and therefore poisoned the samples.',
        answer: 'Fake',
      },
      {
        text: 'Security footage shows Clara entering the plating room alone.',
        answer: 'True',
      },
    ],
    clueByClue:
      'TRUE — Targeted contamination\n The compound appeared only in samples intended for the investors.\nTRUE — Separate plating\n This created a narrow opportunity for selective tampering.\nUNCLEAR — Damaged bowl\n Wear may explain contamination in theory, but it would likely affect multiple batches.\nUNCLEAR — Supplier connection\n Providing equipment does not connect Samuel to the incident.\nTRUE — Competing negotiation\n Clara stood to gain if the current acquisition failed.\nTRUE — Matching vial\n The material directly connects her to the contaminant.\nFAKE — Personal dislike\n Emotion alone does not establish action.\nTRUE — Private access\n She was alone with the investor tray shortly before service.',
    solution:
      'Clara wanted the existing acquisition to collapse so she could move the company toward a competing buyer offering her a larger personal stake.\nShe added a small amount of a nonlethal metallic-tasting compound to the investor tray during plating. The quantity was chosen to ruin confidence without causing severe injury.\nThe worn bowl provided a convenient alternative explanation, but the selective contamination, hidden vial, footage, and financial motive revealed deliberate tampering.',
    takeaway:
      'The distribution of harm often reveals intent. An accident tends to follow the production process; sabotage follows the target.',
  };

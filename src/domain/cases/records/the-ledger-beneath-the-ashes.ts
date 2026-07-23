import type {InvestigationCase} from '../models';

export const theLedgerBeneathTheAshes: InvestigationCase = {
    id: 'the-ledger-beneath-the-ashes',
    title: 'The Ledger Beneath the Ashes',
    difficulty: 'Medium',
    category: 'Café Fraud',
    time: '7 min',
    story:
      'For twelve years, Bell & Briar Café reported modest but steady profits. Then its owner, Mara Voss, discovered that weekend revenue had been falling despite full tables and constant reservations.\nOn Monday morning, a small fire damaged the office beside the kitchen. The flames destroyed several accounting folders—but left the expensive equipment untouched. Among the ashes, investigators found part of a handwritten ledger containing payment totals that did not match the café’s official records.\nThe manager, Adrian Cole, claimed the notebook was only an abandoned forecasting exercise.',
    subjects: [
      {
        name: 'Mara Voss',
        role: 'The café owner',
      },
      {
        name: 'Adrian Cole',
        role: 'The general manager',
      },
      {
        name: 'Nina Bell',
        role: 'The weekend cashier',
      },
      {
        name: 'Everett Shaw',
        role: 'The bookkeeping consultant',
      },
    ],
    question:
      'Was the fire an accident, or was it used to conceal missing revenue?',
    clues: [
      {
        text: 'The damaged ledger records higher weekend revenue than the official accounting system.',
        answer: 'True',
      },
      {
        text: 'The fire began inside an electrical socket behind the office printer.',
        answer: 'Fake',
      },
      {
        text: 'Adrian accessed the office twenty minutes after closing on Sunday.',
        answer: 'True',
      },
      {
        text: 'Nina recently asked another café about an open cashier position.',
        answer: 'Unclear',
      },
      {
        text: 'A metal wastebasket contained traces of lighter fluid.',
        answer: 'True',
      },
      {
        text: 'Everett disliked Adrian and therefore must have altered the ledger.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Revenue mismatch\n The handwritten totals align with card-terminal data that was absent from the official reports.\nFAKE — Electrical origin\n The electrical inspection found no short circuit or damaged wiring near the printer.\nTRUE — Late office access\n The electronic lock registered Adrian’s personal access code after every other employee had left.\nUNCLEAR — Nina’s job search\n Seeking another job may indicate dissatisfaction, but it does not connect her to the missing money or the fire.\nTRUE — Lighter fluid\n The chemical residue establishes that an accelerant was used.\nFAKE — Everett’s motive\n Personal conflict is not evidence that he created false records.',
    solution:
      'Adrian had been removing part of the weekend cash revenue before the figures reached the accounting system. The handwritten ledger recorded the real totals so he could track how much had been taken.\nWhen Mara announced an independent audit, Adrian returned after closing, placed selected financial records in the wastebasket, and started the fire with lighter fluid. He expected the damage to look electrical, but the undamaged socket and chemical residue exposed the staging.\nThe fire was deliberate, and the missing revenue was part of a long-running internal fraud scheme.',
    takeaway:
      'A convincing conclusion requires several independent links: financial discrepancies, access records, physical evidence, and a clear reason for destroying documents.',
  };

import type {InvestigationCase} from '../models';

export const theMidnightRoast: InvestigationCase = {
    id: 'the-midnight-roast',
    title: 'The Midnight Roast',
    difficulty: 'Medium',
    category: 'Café Sabotage',
    time: '8 min',
    story:
      'On the morning of an international coffee competition, the signature roast from North Vale Roastery produced a harsh, smoky flavor. The same beans had passed quality control the previous evening.\nOnly three people had access to the roasting room overnight. The head roaster blamed a faulty temperature sensor, while a rival competitor suggested the beans had been intentionally overheated.\nThe damaged batch was worth thousands, but the roasting machine showed no obvious malfunction.',
    subjects: [
      {
        name: 'Mara Quinn',
        role: 'The head roaster',
      },
      {
        name: 'Elias Thorn',
        role: 'The night technician',
      },
      {
        name: 'Jonas Reed',
        role: 'A competing roaster',
      },
      {
        name: 'Priya Sen',
        role: 'The quality-control specialist',
      },
    ],
    question:
      'Was the competition batch ruined by equipment failure or deliberate interference?',
    clues: [
      {
        text: 'The machine log shows a temperature increase at 2:14 AM.',
        answer: 'True',
      },
      {
        text: 'The internal temperature sensor recorded normal values throughout the roast.',
        answer: 'True',
      },
      {
        text: 'Elias entered the roasting room shortly before the temperature spike.',
        answer: 'True',
      },
      {
        text: 'Jonas had previously criticized North Vale’s roasting style.',
        answer: 'Unclear',
      },
      {
        text: 'A portable heating probe was found inside Elias’s equipment bag.',
        answer: 'True',
      },
      {
        text: 'The beans were already defective before arriving at the roastery.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Temperature change\n The machine registered an unusual increase during the unattended night cycle.\nTRUE — Normal sensor reading\n The built-in sensor had been bypassed, which explains why it did not reflect the real chamber temperature.\nTRUE — Room access\n Elias’s access card places him at the scene immediately before the damage occurred.\nUNCLEAR — Rival criticism\n A negative opinion does not connect Jonas to the machine or the damaged beans.\nTRUE — Portable probe\n The device could interfere with the control system and create false temperature feedback.\nFAKE — Defective beans\n Samples from the same shipment roasted correctly before and after the incident.',
    solution:
      'Elias had secretly accepted payment from another competitor to damage North Vale’s entry. He used a portable probe to manipulate the control system, causing the machine to continue heating while its internal display appeared normal.\nThe sabotage was designed to resemble a technical failure. The synchronized access record, temperature anomaly, and hidden equipment revealed deliberate interference.',
    takeaway:
      'Technical sabotage often depends on creating two realities: what the machine actually does and what its monitoring system reports.',
  };

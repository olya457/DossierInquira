import type {InvestigationCase} from '../models';

export const theWhisperedFormula: InvestigationCase = {
    id: 'the-whispered-formula',
    title: 'The Whispered Formula',
    difficulty: 'Hard',
    category: 'Food Science Mystery',
    time: '10 min',
    story:
      'A private tasting laboratory was preparing to unveil a reduced-sugar chocolate filling that maintained the texture of a traditional ganache. Only four people had access to the final formula.\nTwo days before the presentation, a rival manufacturer announced an almost identical product. The rival’s technical description included a highly unusual cooling sequence known only to the laboratory team.\nNo files appeared to have been downloaded, and the laboratory’s security system showed no unauthorized entry.',
    subjects: [
      {
        name: 'Dr. Elena March',
        role: 'Lead food scientist',
      },
      {
        name: 'Victor Lane',
        role: 'Laboratory technician',
      },
      {
        name: 'Sofia Ren',
        role: 'Sensory testing coordinator',
      },
      {
        name: 'Marcus Vale',
        role: 'External equipment engineer',
      },
    ],
    question: 'How did the confidential formula leave a secured laboratory?',
    clues: [
      {
        text: 'The rival product uses the same uncommon three-stage cooling process.',
        answer: 'True',
      },
      {
        text: 'Victor photographed the formula because his phone was found near the laboratory desk.',
        answer: 'Unclear',
      },
      {
        text: 'A voice assistant in the testing room stored several accidental audio recordings.',
        answer: 'True',
      },
      {
        text: 'Sofia deliberately transmitted the formula during a phone call with the rival company.',
        answer: 'Fake',
      },
      {
        text: 'Marcus serviced the room’s smart speaker one week before the leak.',
        answer: 'True',
      },
      {
        text: 'One recovered recording includes Elena reading the complete cooling sequence aloud.',
        answer: 'True',
      },
      {
        text: 'The rival company obtained the recording through Marcus’s maintenance account.',
        answer: 'True',
      },
    ],
    clueByClue:
      'TRUE — Matching process\n The cooling sequence is too specific to be an independent coincidence.\nUNCLEAR — Victor’s phone\n Its presence in the room does not prove that it was used to capture confidential information.\nTRUE — Stored recordings\n The device had mistakenly activated during several technical discussions.\nFAKE — Sofia’s phone call\n Telephone records show she contacted a packaging supplier, not the rival manufacturer.\nTRUE — Maintenance access\n Marcus retained remote access after completing the equipment service.\nTRUE — Formula spoken aloud\n The recovered audio clearly contains the protected method.\nTRUE — Account connection\n Server logs show that Marcus’s credentials accessed and exported the recording.',
    solution:
      'No one removed a document or entered the laboratory illegally. The leak occurred because the team discussed the formula beside a voice-enabled device that had been left connected to a cloud account.\nMarcus discovered the recordings while checking the system remotely. Recognizing their commercial value, he downloaded the discussion and sold it to the rival manufacturer.\nThe case was not a traditional break-in. It was a failure of information security combined with the misuse of legitimate technical access.',
    takeaway:
      'Confidential information can escape without a missing file. Investigators must consider microphones, cloud services, access permissions, and ordinary devices that quietly collect data.',
  };

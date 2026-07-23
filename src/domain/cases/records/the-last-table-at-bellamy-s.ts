import type {InvestigationCase} from '../models';

export const theLastTableAtBellamyS: InvestigationCase = {
    id: 'the-last-table-at-bellamy-s',
    title: 'The Last Table at Bellamy’s',
    difficulty: 'Hard',
    category: 'Restaurant Alibi',
    time: '11 min',
    story:
      'A rare nineteenth-century wine journal disappeared during a private dinner at Bellamy’s, a members-only restaurant. The journal had been displayed in a glass cabinet near the dining room before its transfer to a museum.\nOnly six guests and three employees remained inside the building when the security alarm briefly failed.\nOne guest, financier Lucien Ward, claimed he never left the dining table. The waiter confirmed this. Yet the journal was later found inside a delivery crate addressed to Ward’s private cellar.',
    subjects: [
      {
        name: 'Lucien Ward',
        role: 'The financier and collector',
      },
      {
        name: 'Mira Solano',
        role: 'The head waiter',
      },
      {
        name: 'Daniel Reeve',
        role: 'The restaurant sommelier',
      },
      {
        name: 'Asha Bellamy',
        role: 'The restaurant director',
      },
    ],
    question: 'Who removed the journal, and how was the theft disguised?',
    clues: [
      {
        text: 'Dining-room footage shows Lucien seated throughout the alarm failure.',
        answer: 'True',
      },
      {
        text: 'The crate label proves Lucien personally placed the journal inside it.',
        answer: 'Unclear',
      },
      {
        text: 'Mira’s service tablet issued a staff-door unlock request during the outage.',
        answer: 'True',
      },
      {
        text: 'Daniel’s fingerprints were found on the journal’s protective glass.',
        answer: 'Unclear',
      },
      {
        text: 'The waiter’s statement was recorded before investigators mentioned the exact outage time.',
        answer: 'True',
      },
      {
        text: 'The alarm failed because a storm interrupted the city’s electricity supply.',
        answer: 'Fake',
      },
      {
        text: 'A payment from Lucien reached Mira’s brother three days before the dinner.',
        answer: 'True',
      },
    ],
    clueByClue:
      'TRUE — Lucien remained seated\n The footage confirms that he did not physically enter the display area.\nUNCLEAR — Addressed crate\n The destination connects the shipment to Lucien, but someone else could have packed it.\nTRUE — Door request\n Mira’s tablet was used to access the staff corridor beside the cabinet.\nUNCLEAR — Daniel’s fingerprints\n As sommelier, he had previously handled the cabinet while arranging the display.\nTRUE — Prematurely precise statement\n Mira described Lucien as seated during the exact two-minute outage before that timing was publicly known.\nFAKE — Storm explanation\n Weather and utility records show no power interruption.\nTRUE — Financial link\n The payment provides a traceable connection between Lucien and Mira.',
    solution:
      'Lucien designed the theft but remained visibly seated to preserve his alibi. Mira triggered a local alarm interruption through the restaurant’s maintenance panel, unlocked the service corridor, removed the journal, and concealed it inside a prepared wine-delivery crate.\nShe then gave an overly specific statement supporting Lucien’s innocence. Her knowledge of the precise outage window revealed that the story had been coordinated in advance.\nDaniel’s fingerprints were legitimate and unrelated. The theft depended on dividing responsibility: one person planned and financed it, while another performed the physical act.',
    takeaway:
      'An alibi may prove that a suspect did not perform one action, but it does not prove that they did not organize the crime.',
  };

import type {InvestigationCase} from '../models';

export const theSilentReservation: InvestigationCase = {
    id: 'the-silent-reservation',
    title: 'The Silent Reservation',
    difficulty: 'Hard',
    category: 'Identity Deception',
    time: '10 min',
    story:
      'A private dining room at an exclusive restaurant was booked under the name of a celebrated food critic. The reservation triggered a carefully prepared tasting menu and unusually attentive service.\nThe critic never arrived.\nBy the end of the evening, photographs of unreleased dishes had appeared on a competitor’s social media account. The restaurant manager suspected that someone had used the critic’s identity to gain access.',
    subjects: [
      {
        name: 'Celine Hart',
        role: 'The restaurant manager',
      },
      {
        name: 'Adrian Voss',
        role: 'The food critic',
      },
      {
        name: 'Mira Lane',
        role: 'A freelance photographer',
      },
      {
        name: 'Theo Brandt',
        role: 'The rival restaurant’s marketing director',
      },
    ],
    question: 'Who made the false reservation, and why?',
    clues: [
      {
        text: 'The booking email differs by one letter from the critic’s verified address.',
        answer: 'True',
      },
      {
        text: 'The reservation was confirmed from a public Wi-Fi network near the rival restaurant.',
        answer: 'True',
      },
      {
        text: 'Mira photographed the dishes during the dinner.',
        answer: 'True',
      },
      {
        text: 'Mira’s presence proves she created the false identity.',
        answer: 'Unclear',
      },
      {
        text: 'Theo paid Mira for a “competitive visual audit.”',
        answer: 'True',
      },
      {
        text: 'Adrian secretly attended under another name.',
        answer: 'Fake',
      },
      {
        text: 'The restaurant’s own waiter leaked the images.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — False email\n The address was designed to look authentic at a glance.\nTRUE — Network origin\n The confirmation came from a location linked to the rival business.\nTRUE — Photographer present\n Security footage shows Mira documenting every course.\nUNCLEAR — Identity creation\n She may have participated without designing the entire scheme.\nTRUE — Payment trail\n The invoice language disguises the real purpose but connects Theo to the operation.\nFAKE — Critic attendance\n Travel records confirm Adrian was in another country.\nFAKE — Waiter leak\n The image angles match Mira’s seat, not the service area.',
    solution:
      'Theo created the false reservation using an email address nearly identical to Adrian’s. He hired Mira to attend as the critic’s assistant and photograph the unreleased dishes.\nThe goal was not only to copy presentation ideas but also to embarrass the restaurant by publishing its menu before launch.\nMira gathered the images, but Theo organized the deception and financed it.',
    takeaway:
      'Identity fraud often succeeds through small visual similarities rather than sophisticated technology.',
  };

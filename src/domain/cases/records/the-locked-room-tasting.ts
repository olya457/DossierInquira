import type {InvestigationCase} from '../models';

export const theLockedRoomTasting: InvestigationCase = {
    id: 'the-locked-room-tasting',
    title: 'The Locked Room Tasting',
    difficulty: 'Expert',
    category: 'Corporate Espionage',
    time: '14 min',
    story:
      'A beverage company invited four executives to a confidential tasting of a new coffee extract. The meeting took place in a sealed conference room with phones collected at the door.\nWithin three hours, a rival company filed a trademark application using the exact unreleased product name discussed during the tasting.\nNo attendee admitted communicating with anyone outside the room. Security confirmed that the door remained locked throughout the session.',
    subjects: [
      {
        name: 'Dr. Mina Cross',
        role: 'The product director',
      },
      {
        name: 'Julian Ward',
        role: 'The chief financial officer',
      },
      {
        name: 'Elise Mora',
        role: 'The brand strategist',
      },
      {
        name: 'Gavin Holt',
        role: 'The legal adviser',
      },
      {
        name: 'Rook & Vale',
        role: 'The rival beverage company',
      },
    ],
    question:
      'How did the unreleased name leave a room with no visible communication devices?',
    clues: [
      {
        text: 'Every attendee’s phone remained sealed outside the room.',
        answer: 'True',
      },
      {
        text: 'The conference-room display was connected to the building network.',
        answer: 'True',
      },
      {
        text: 'A presentation slide briefly showed the final product name.',
        answer: 'True',
      },
      {
        text: 'The display automatically synchronized screenshots to a remote support server.',
        answer: 'True',
      },
      {
        text: 'Gavin had once represented the rival company.',
        answer: 'Unclear',
      },
      {
        text: 'Julian sent the name through a hidden mobile phone.',
        answer: 'Fake',
      },
      {
        text: 'The remote support account was accessed from an IP address used by Rook & Vale’s contractor.',
        answer: 'True',
      },
      {
        text: 'Elise deliberately left the slide visible for several minutes.',
        answer: 'Unclear',
      },
      {
        text: 'The locked door prevented all information from leaving the room.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Phones secured\n The leak did not occur through the collected personal devices.\nTRUE — Networked display\n The room still contained connected technology.\nTRUE — Name displayed\n The confidential term appeared on a screen capable of transmitting data.\nTRUE — Automatic screenshots\n The support system captured and uploaded the presentation.\nUNCLEAR — Gavin’s former client\n The prior relationship is relevant but does not prove participation.\nFAKE — Hidden phone\n Search records and signal logs found no unauthorized mobile device.\nTRUE — Contractor access\n The remote login connects the leak to infrastructure used by the rival.\nUNCLEAR — Long display time\n Poor presentation practice may have increased exposure, but intent is unproven.\nFAKE — Physical security assumption\n A room can be physically sealed while remaining digitally open.',
    solution:
      'The leak occurred through the conference-room display, not through any attendee. Its remote-support software automatically captured screenshots for diagnostic purposes.\nA contractor with access to the support server recognized the product name and passed it to Rook & Vale, which immediately filed the trademark application.\nThe executives focused on visible devices and physical access but overlooked the networked system already inside the room.',
    takeaway:
      'A secure meeting is only as private as every connected device within it. Physical isolation does not guarantee information security.',
  };

import type {InvestigationCase} from '../models';

export const thePhotographThatArrivedTooEarly: InvestigationCase = {
    id: 'the-photograph-that-arrived-too-early',
    title: 'The Photograph That Arrived Too Early',
    difficulty: 'Hard',
    category: 'Timeline Manipulation',
    time: '11 min',
    story:
      'A luxury bakery unveiled a sculpted wedding cake in a locked display room at 6:00 PM. At 5:42 PM, an anonymous account posted a photograph of the finished design online.\nThe decorator insisted the cake had not been completed until minutes before the unveiling. Only five staff members knew the final appearance.\nThe photograph appeared to show the exact display room, including a floral arrangement installed shortly before the event.',
    subjects: [
      {
        name: 'Amelia Frost',
        role: 'The cake designer',
      },
      {
        name: 'Victor Hale',
        role: 'The event photographer',
      },
      {
        name: 'Nora Bell',
        role: 'The floral stylist',
      },
      {
        name: 'Silas Kent',
        role: 'The production manager',
      },
    ],
    question:
      'How was the finished cake photographed before it was officially complete?',
    clues: [
      {
        text: 'The photo metadata states that the image was taken at 5:39 PM.',
        answer: 'Unclear',
      },
      {
        text: 'The floral arrangement in the photograph differs slightly from the final display.',
        answer: 'True',
      },
      {
        text: 'Victor photographed an earlier prototype during a rehearsal.',
        answer: 'True',
      },
      {
        text: 'The posted image was digitally edited to include details from the final cake.',
        answer: 'True',
      },
      {
        text: 'Amelia leaked the final design to increase publicity.',
        answer: 'Fake',
      },
      {
        text: 'Silas had access to both the prototype images and the final design files.',
        answer: 'True',
      },
      {
        text: 'The social-media timestamp proves the physical cake existed at that moment.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'UNCLEAR — Metadata time\n Metadata can be altered and does not independently establish when the scene existed.\nTRUE — Floral mismatch\n The photograph contains rehearsal flowers, not the arrangement installed for the unveiling.\nTRUE — Earlier prototype\n Victor’s archive includes the original base image.\nTRUE — Digital alteration\n Layer analysis reveals that decorative elements were added from design renders.\nFAKE — Designer’s publicity plan\n No communication or financial motive supports this claim.\nTRUE — Silas’s access\n He could obtain every component needed to construct the deceptive image.\nFAKE — Upload time\n It proves only when the edited file was posted.',
    solution:
      'Silas combined a rehearsal photograph of the prototype with digital elements from the final design render. He posted the composite before the unveiling to create the impression of an internal leak.\nHis plan was to damage Amelia’s credibility and replace her as creative director. The floral discrepancy and digital-layer evidence revealed that the photograph did not show the completed physical cake.',
    takeaway:
      'A photograph can be authentic in parts while false as a whole. Time, place, and content must each be verified separately.',
  };

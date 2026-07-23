import type {InvestigationCase} from '../models';

export const theVioletSugarShipment: InvestigationCase = {
    id: 'the-violet-sugar-shipment',
    title: 'The Violet Sugar Shipment',
    difficulty: 'Easy',
    category: 'Supply Chain Mystery',
    time: '5 min',
    story:
      'A boutique bakery received twenty bags of violet-colored decorating sugar for an important evening event. When the bags were opened, the sugar smelled faintly chemical and stained the frosting blue instead of violet.\nThe supplier insisted the correct product had been shipped. The bakery accused a temporary employee of switching the bags to sabotage the event.\nThe labels appeared genuine, and every package remained sealed.',
    subjects: [
      {
        name: 'Imani Cross',
        role: 'The bakery owner',
      },
      {
        name: 'Rhea Moss',
        role: 'The temporary assistant',
      },
      {
        name: 'Calder Foods',
        role: 'The ingredient supplier',
      },
    ],
    question: 'Was the shipment deliberately switched?',
    clues: [
      {
        text: 'The printed batch code belongs to an industrial cleaning product.',
        answer: 'True',
      },
      {
        text: 'Rhea had access to the storage room before the bags were opened.',
        answer: 'Unclear',
      },
      {
        text: 'All twenty seals match the supplier’s factory sealing pattern.',
        answer: 'True',
      },
      {
        text: 'The warehouse scan assigned the wrong label file to the packaging line.',
        answer: 'True',
      },
      {
        text: 'The blue color proves that Rhea added food dye.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Incorrect batch code\n The code identifies a different product from the supplier’s own catalogue.\nUNCLEAR — Storage access\n Opportunity alone does not prove that Rhea altered sealed packages.\nTRUE — Factory seals\n The packaging was not opened after leaving the production line.\nTRUE — Labeling error\n Digital records show that the wrong product labels were loaded during packing.\nFAKE — Blue dye accusation\n Laboratory testing found no added food coloring.',
    solution:
      'The bakery was not sabotaged. At the supplier’s warehouse, a software error linked the violet-sugar label design to a nearby packaging run for a cleaning compound.\nThe bags were sealed at the factory with the wrong labels and delivered through the normal supply chain. Rhea’s access created suspicion, but the intact seals and warehouse records cleared her.\nThe incident was a dangerous labeling failure, not an internal crime.',
    takeaway:
      'Opportunity should never outweigh physical evidence. Packaging integrity and production records can distinguish deliberate interference from a system error.',
  };

import type {InvestigationCase} from '../models';

export const thePortraitInTheCocoaTin: InvestigationCase = {
    id: 'the-portrait-in-the-cocoa-tin',
    title: 'The Portrait in the Cocoa Tin',
    difficulty: 'Hard',
    category: 'Hidden Provenance',
    time: '12 min',
    story:
      'During renovations at an old Parisian chocolate shop, workers discovered a rolled portrait inside a sealed cocoa tin behind a wall panel. The unsigned painting appeared to depict a famous actress who had visited the shop in the 1920s.\nA private dealer quickly offered €300,000, claiming the work was an unknown portrait by modernist painter Luc Moreau.\nBefore the sale, an archivist warned that someone may have planted the painting to create a sensational discovery story.',
    subjects: [
      {
        name: 'Camille Duret',
        role: 'The current shop owner',
      },
      {
        name: 'Henri Vale',
        role: 'The private art dealer',
      },
      {
        name: 'Dr. Noor Bensaïd',
        role: 'The paper conservator',
      },
      {
        name: 'Émile Laurent',
        role: 'The renovation contractor',
      },
    ],
    question:
      'Is the portrait a genuine historical discovery or a staged forgery?',
    clues: [
      {
        text: 'The paper contains a synthetic brightener introduced in commercial production after 1950.',
        answer: 'True',
      },
      {
        text: 'The cocoa tin design was used by the shop during the 1920s.',
        answer: 'True',
      },
      {
        text: 'A genuine period container proves that everything inside it is equally old.',
        answer: 'Fake',
      },
      {
        text: 'The wall panel contains modern screws beneath an older decorative frame.',
        answer: 'True',
      },
      {
        text: 'Henri transferred money to Émile shortly before the renovation began.',
        answer: 'True',
      },
      {
        text: 'The portrait resembles Luc Moreau’s known brushwork.',
        answer: 'Unclear',
      },
    ],
    clueByClue:
      'TRUE — Modern paper component\n The material could not have been manufactured during the claimed period.\nTRUE — Authentic container\n The tin itself is historically genuine.\nFAKE — Container proves contents\n Old containers can be reused to make newer objects appear older.\nTRUE — Recently opened wall space\n The modern fasteners show that the hiding place had been accessed in recent years.\nTRUE — Dealer-contractor payment\n The financial connection supports coordination between Henri and Émile.\nUNCLEAR — Similar style\n Stylistic resemblance is subjective and can be deliberately imitated.',
    solution:
      'Henri acquired an authentic 1920s cocoa tin and commissioned a portrait designed to imitate Luc Moreau’s style. Émile placed both objects behind the decorative wall panel before the renovation team officially entered the room.\nThe staged discovery was intended to create a dramatic provenance story and raise the painting’s value. The old tin provided credibility, but the modern paper, recent screws, and hidden payment exposed the scheme.\nThe portrait was not a lost modernist work. It was a contemporary forgery supported by authentic historical packaging.',
    takeaway:
      'A real object can be used to authenticate a false story. Investigators must date every component separately and reconstruct the entire chain of custody.',
  };

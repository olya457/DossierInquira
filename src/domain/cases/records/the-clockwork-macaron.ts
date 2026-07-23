import type {InvestigationCase} from '../models';

export const theClockworkMacaron: InvestigationCase = {
    id: 'the-clockwork-macaron',
    title: 'The Clockwork Macaron',
    difficulty: 'Medium',
    category: 'Auction Deception',
    time: '6 min',
    story:
      'At a charity auction, guests competed for an ornate mechanical display shaped like a tower of macarons. The piece was advertised as an original creation by renowned confectionery artist Étienne Rocher.\nMinutes after it sold for €48,000, the winning bidder received an anonymous message claiming the sculpture was a modern replica.\nThe certificate looked authentic, the artist’s signature appeared beneath the base, and the auction house insisted the provenance was complete.',
    subjects: [
      {
        name: 'Étienne Rocher',
        role: 'The celebrated confectionery artist',
      },
      {
        name: 'Claire Mornay',
        role: 'The auction curator',
      },
      {
        name: 'Julian Crest',
        role: 'The winning bidder',
      },
      {
        name: 'Theo Arden',
        role: 'A former studio assistant',
      },
    ],
    question: 'Was the auctioned sculpture genuine?',
    clues: [
      {
        text: 'The certificate uses paper manufactured five years after the artist’s death.',
        answer: 'True',
      },
      {
        text: 'The signature resembles examples found in exhibition catalogues.',
        answer: 'Unclear',
      },
      {
        text: 'A hidden motor carries a serial number issued only three years ago.',
        answer: 'True',
      },
      {
        text: 'Theo once argued with the artist and therefore created the replica.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Modern paper\n Material dating directly contradicts the claimed age of the certificate.\nUNCLEAR — Similar signature\n A visual match may support authenticity, but signatures can be copied.\nTRUE — Recent motor\n The internal component could not have existed when the original work was supposedly produced.\nFAKE — Former dispute\n An argument establishes neither access nor participation in the deception.',
    solution:
      'The sculpture was a recent replica assembled around a modern motor. Its certificate had been artificially aged, and the signature was copied from a published catalogue.\nClaire had accepted the piece from a private collector without conducting a technical inspection. She did not create the forgery, but she ignored inconsistencies because the famous name was expected to attract high bids.\nThe anonymous warning came from Theo, who recognized construction methods never used in Rocher’s studio.',
    takeaway:
      'Appearance and reputation can create false confidence. Reliable authentication combines documentation with materials, manufacturing dates, and technical examination.',
  };

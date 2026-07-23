import type {InvestigationCase} from '../models';

export const theEmptyVanillaVault: InvestigationCase = {
    id: 'the-empty-vanilla-vault',
    title: 'The Empty Vanilla Vault',
    difficulty: 'Medium',
    category: 'Inventory Fraud',
    time: '7 min',
    story:
      'A specialty ingredient importer discovered that several kilograms of premium vanilla had disappeared from a temperature-controlled storage room.\nThe vault had not been forced, and the inventory system showed no removal. The missing product was extremely valuable and easy to resell in small quantities.\nThe warehouse supervisor claimed the loss was caused by an incorrect shipment count.',
    subjects: [
      {
        name: 'Leila Orr',
        role: 'The importer',
      },
      {
        name: 'Marcus Dene',
        role: 'The warehouse supervisor',
      },
      {
        name: 'Tomas Reed',
        role: 'The delivery driver',
      },
      {
        name: 'Iris Vale',
        role: 'The inventory auditor',
      },
    ],
    question: 'Was the vanilla ever delivered, or was it stolen after arrival?',
    clues: [
      {
        text: 'The delivery truck’s weight changed by the exact mass of the vanilla shipment.',
        answer: 'True',
      },
      {
        text: 'The receiving camera shows sealed crates entering the warehouse.',
        answer: 'True',
      },
      {
        text: 'The inventory system was placed in maintenance mode for nine minutes.',
        answer: 'True',
      },
      {
        text: 'Tomas frequently delivers to other food companies.',
        answer: 'Unclear',
      },
      {
        text: 'Marcus’s access badge opened the vault during the maintenance window.',
        answer: 'True',
      },
      {
        text: 'The crates were empty when they arrived.',
        answer: 'Fake',
      },
    ],
    clueByClue:
      'TRUE — Truck weight\n The shipment’s physical mass was present when the vehicle reached the warehouse.\nTRUE — Sealed delivery\n The crates entered intact.\nTRUE — System interruption\n The inventory record was deliberately disabled during the critical period.\nUNCLEAR — Other deliveries\n This is normal for a professional driver and does not suggest theft.\nTRUE — Vault entry\n Marcus accessed the storage area while digital tracking was unavailable.\nFAKE — Empty crates\n Weight records and later packaging examination disprove this claim.',
    solution:
      'The vanilla was delivered correctly. Marcus placed the inventory system into maintenance mode, entered the vault, removed part of the shipment, and resealed the outer packaging.\nHe planned to blame a supplier counting error, knowing the system would show no recorded withdrawal.\nThe truck weight, receiving footage, and access record proved that the loss occurred inside the warehouse.',
    takeaway:
      'When digital records disappear, physical measurements and access logs can reconstruct what actually happened.',
  };

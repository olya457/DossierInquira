import type {InvestigationCase} from './models';
import {theLedgerBeneathTheAshes} from './records/the-ledger-beneath-the-ashes';
import {theWhisperedFormula} from './records/the-whispered-formula';
import {theClockworkMacaron} from './records/the-clockwork-macaron';
import {theLastTableAtBellamyS} from './records/the-last-table-at-bellamy-s';
import {theVioletSugarShipment} from './records/the-violet-sugar-shipment';
import {thePortraitInTheCocoaTin} from './records/the-portrait-in-the-cocoa-tin';
import {theMidnightRoast} from './records/the-midnight-roast';
import {theSilentReservation} from './records/the-silent-reservation';
import {theBurntSugarAlibi} from './records/the-burnt-sugar-alibi';
import {thePhotographThatArrivedTooEarly} from './records/the-photograph-that-arrived-too-early';
import {theEmptyVanillaVault} from './records/the-empty-vanilla-vault';
import {theBitterAftertaste} from './records/the-bitter-aftertaste';
import {theLockedRoomTasting} from './records/the-locked-room-tasting';

export const cases: readonly InvestigationCase[] = [
  theLedgerBeneathTheAshes,
  theWhisperedFormula,
  theClockworkMacaron,
  theLastTableAtBellamyS,
  theVioletSugarShipment,
  thePortraitInTheCocoaTin,
  theMidnightRoast,
  theSilentReservation,
  theBurntSugarAlibi,
  thePhotographThatArrivedTooEarly,
  theEmptyVanillaVault,
  theBitterAftertaste,
  theLockedRoomTasting,
];

export function getCaseById(id: string): InvestigationCase | undefined {
  return cases.find(investigationCase => investigationCase.id === id);
}

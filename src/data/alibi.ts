export type EvidenceLevel = 'Low' | 'Medium' | 'High';
export type Verification = 'Unverified' | 'Partially Verified' | 'Verified';
export type AlibiInput = {
  incidentTime: string;
  lastConfirmedTime: string;
  lastLocation: string;
  incidentLocation: string;
  availableMinutes: number;
  distance: string;
  unit: 'km' | 'mi';
  transport: string;
  travelMinutes: number;
  delayMinutes: number;
  notes: string;
  reliability: EvidenceLevel;
  digitalEvidence: string;
  verification: Verification;
  alternativeRoute: boolean;
};

export type VerdictKind =
  | 'unlikely'
  | 'strong'
  | 'possible'
  | 'uncertain'
  | 'insufficient';

export type AlibiResult = {
  kind: VerdictKind;
  title: string;
  confidence: number | null;
  gap: number;
  evidence: string;
  weakest: string;
  note: string;
};

export type SavedAnalysis = {
  id: string;
  createdAt: string;
  input: AlibiInput;
  result: AlibiResult;
};

export const defaultAlibiInput: AlibiInput = {
  incidentTime: '8:20 PM',
  lastConfirmedTime: '7:55 PM',
  lastLocation: 'Bellamy Café',
  incidentLocation: 'Riverside Gallery',
  availableMinutes: 25,
  distance: '18',
  unit: 'km',
  transport: 'Car',
  travelMinutes: 28,
  delayMinutes: 6,
  notes: '',
  reliability: 'Medium',
  digitalEvidence: 'Message',
  verification: 'Partially Verified',
  alternativeRoute: false,
};

export function analyzeAlibi(input: AlibiInput): AlibiResult {
  const required = Math.max(0, input.travelMinutes + input.delayMinutes);
  const gap = input.availableMinutes - required;
  const hasLocations = Boolean(
    input.lastLocation.trim() && input.incidentLocation.trim(),
  );
  const hasEvidence = input.digitalEvidence !== 'None';
  const evidence =
    input.verification === 'Verified' && input.reliability === 'High'
      ? 'Strong'
      : input.verification === 'Unverified' || input.reliability === 'Low'
      ? 'Weak'
      : 'Moderate';

  if (!hasLocations || (!hasEvidence && input.notes.trim().length === 0)) {
    return {
      kind: 'insufficient',
      title: 'Insufficient Evidence',
      confidence: null,
      gap,
      evidence: '—',
      weakest: 'Missing or contradictory inputs',
      note: 'Key inputs are missing or contradictory. Confirm the timeline and travel details before drawing a conclusion.',
    };
  }
  if (gap <= -5 && !input.alternativeRoute) {
    return {
      kind: 'unlikely',
      title: 'Alibi Unlikely',
      confidence: Math.min(96, 70 + Math.abs(gap)),
      gap,
      evidence,
      weakest: 'Travel time exceeds the available window',
      note: 'The suspect could not reach the incident location within the available time under normal conditions. Verify whether faster or unrecorded transport was available.',
    };
  }
  if (gap >= 15 && evidence === 'Strong') {
    return {
      kind: 'strong',
      title: 'Alibi Strong',
      confidence: Math.min(98, 80 + Math.round(gap / 2)),
      gap,
      evidence,
      weakest: 'No digital evidence on record',
      note: 'Verified evidence places the suspect elsewhere, well outside the incident window. The alibi holds firmly.',
    };
  }
  if (gap >= 8 && evidence !== 'Weak') {
    return {
      kind: 'possible',
      title: 'Alibi Possible',
      confidence: Math.min(86, 64 + gap),
      gap,
      evidence,
      weakest: 'Witness reliability is only medium',
      note: 'There is enough time to travel between the two locations within the window. The alibi is physically plausible — corroborate with evidence.',
    };
  }
  return {
    kind: 'uncertain',
    title: 'Alibi Uncertain',
    confidence: 58,
    gap,
    evidence,
    weakest: 'Evidence is unverified',
    note: 'The margin is razor-thin. A small change in route or delay could tip this either way — gather firmer evidence before concluding.',
  };
}

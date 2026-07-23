import {dossierAssets} from './registry';

export const images = {
  loader: dossierAssets.brand.loaderIllustration,
  logo: dossierAssets.brand.mark,
  onboardingPlaces: dossierAssets.onboarding.historicPlaces,
  onboardingCases: dossierAssets.onboarding.caseFiles,
  onboardingNotes: dossierAssets.onboarding.researchNotes,
  cafeCentral: dossierAssets.discoveries['cafe-central'],
  sacherTorte: dossierAssets.discoveries['the-original-sacher-torte'],
  tollHouse: dossierAssets.discoveries['the-toll-house-cookie'],
  frozenPop: dossierAssets.discoveries['the-frozen-pop-accident'],
  chocolateBirth: dossierAssets.discoveries['the-birth-of-milk-chocolate'],
  challengeEmpty: dossierAssets.brand.mark,
};

export {dossierAssets, getDiscoveryImage} from './registry';

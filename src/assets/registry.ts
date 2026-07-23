import type {ImageSourcePropType} from 'react-native';

export const dossierAssets = {
  brand: {
    loaderIllustration: require('./dossier-loader.png'),
    mark: require('./dossier-logo.png'),
  },
  onboarding: {
    caseFiles: require('./onboarding-cases.png'),
    researchNotes: require('./onboarding-notes.png'),
    historicPlaces: require('./onboarding-places.png'),
  },
  discoveries: {
    'cafe-central': require('./cafe-central.png'),
    'the-original-sacher-torte': require('./sacher-torte.png'),
    'the-toll-house-cookie': require('./toll-house-cookie.png'),
    'the-frozen-pop-accident': require('./frozen-pop.png'),
    'the-birth-of-milk-chocolate': require('./milk-chocolate.png'),
    'caffe-florian': require('./caffe-florian.png'),
    'the-conching-breakthrough': require('./the-conching-breakthrough.png'),
    'the-moka-express': require('./the-moka-express.png'),
    'la-pavoni-ideale': require('./la-pavoni-ideale.png'),
    'the-palmer-house-brownie': require('./the-palmer-house-brownie.png'),
    'bournville-model-village': require('./bournville-model-village.png'),
    'maison-cailler': require('./maison-cailler.png'),
    'the-first-gianduiotto': require('./the-first-gianduiotto.png'),
    'the-first-nutella-jar': require('./the-first-nutella-jar.png'),
    'the-chocolate-with-a-secret-note': require('./the-chocolate-with-a-secret-note.png'),
    'pasteis-de-belem': require('./pasteis-de-belem.png'),
    'the-belgian-praline': require('./the-belgian-praline.png'),
    'the-triangular-toblerone': require('./the-triangular-toblerone.png'),
    'hersheys-first-milk-chocolate-bar': require('./hersheys-first-milk-chocolate-bar.png'),
    'the-paper-coffee-filter': require('./the-paper-coffee-filter.png'),
    'boston-cream-pie': require('./boston-cream-pie.png'),
    'bananas-foster': require('./bananas-foster.png'),
    'trinity-burnt-cream': require('./trinity-burnt-cream.png'),
  } satisfies Record<string, ImageSourcePropType>,
} as const;

export function getDiscoveryImage(id: string): ImageSourcePropType {
  const images: Record<string, ImageSourcePropType> =
    dossierAssets.discoveries;
  return images[id] ?? dossierAssets.discoveries['the-birth-of-milk-chocolate'];
}


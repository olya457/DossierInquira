import {ImageSourcePropType} from 'react-native';
import {images} from './index';

const discoveryImages: Record<string, ImageSourcePropType> = {
  'cafe-central': images.cafeCentral,
  'the-original-sacher-torte': images.sacherTorte,
  'the-toll-house-cookie': images.tollHouse,
  'the-frozen-pop-accident': images.frozenPop,
  'the-birth-of-milk-chocolate': images.chocolateBirth,
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
};

export const getDiscoveryImage = (id: string) =>
  discoveryImages[id] || images.chocolateBirth;

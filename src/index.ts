import ChromePainter from './ChromePainter';
import IEPainter from './IEPainter';

const painterFactory = (type: string) => {
  if (type === 'ie') return IEPainter.getInstance();
  if (type === 'chrome') return ChromePainter.getInstance();
  throw new Error('Unsupported browser type');
};

const main = () => {
  painterFactory('chrome');
};

console.log(main);
import Home from '../views/Home';
import HexColors from '../views/HexColors';
import RandomQuotes from '../views/RandomQuotes';
import DigitalClock from '../views/DigitalClock';

const route = (target: Element) => {
  const { pathname } = window.location;
  switch (pathname) {
    case '/':
      new Home(target);
      break;
    case '/HexColors':
      new HexColors(target);
      break;
    case '/RandomQuotes':
      new RandomQuotes(target);
      break;
    case '/DigitalClock':
      new DigitalClock(target);
      break;
    default:
      console.log('not found page');
  }
};

export default route;

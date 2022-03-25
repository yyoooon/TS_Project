import Home from '../views/Home';
import HexColors from '../views/HexColors';
import RandomQuotes from '../views/RandomQuotes';
import DigitalClock from '../views/DigitalClock';
import ImageSlider from '../views/ImageSlider';

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
    case '/ImageSlider':
      new ImageSlider(target);
      break;
    default:
      console.log('not found page');
  }
};

export default route;

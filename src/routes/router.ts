import Home from '../views/Home';
import HexColors from '../views/HexColors';
import RandomQuotes from '../views/RandomQuotes';

const router = (target: Element) => {
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
    default:
      console.log('not found page');
  }
};

export default router;

//history.pushState로 url이동 후 route를 한번 더 실행해야한다

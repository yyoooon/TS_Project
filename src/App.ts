// import HexColors from './views/HexColors';
// import RandomQuotes from './views/RandomQuotes';
import ImageSlider from './views/ImageSlider';
import { imageUrlList } from './dummy';
// import DigitalClock from './views/DigitalClock';

export default class App {
  $target: Element;
  constructor({ $target }: { $target: Element }) {
    this.$target = $target;
    this.route();
  }
  route() {
    const { pathname } = window.location;
    if (pathname === '/') {
      // new HexColors(this.$target);
      // new RandomQuotes(this.$target);
      new ImageSlider(this.$target, { imageUrlList });
      // new DigitalClock(this.$target);
    }
  }
}

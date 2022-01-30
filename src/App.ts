// import HexColors from './views/HexColors';
import RandomQuotes from './views/RandomQuotes';

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
      new RandomQuotes(this.$target);
    }
  }
}

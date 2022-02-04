// import HexColors from './views/HexColors';
// import RandomQuotes from './views/RandomQuotes';
import ImageSlider from './views/ImageSlider';

const imageUrlList = [
  'https://iamcodefoxx.github.io/ImageCarousel/Lam0.jpg',
  'https://iamcodefoxx.github.io/ImageCarousel/Lam1.jpg',
  'https://iamcodefoxx.github.io/ImageCarousel/Lam2.jpg',
  'https://iamcodefoxx.github.io/ImageCarousel/Lam3.jpg',
  'https://iamcodefoxx.github.io/ImageCarousel/Lam4.jpg',
  'https://iamcodefoxx.github.io/ImageCarousel/Lam5.jpg',
  'https://iamcodefoxx.github.io/ImageCarousel/Lam6.jpg',
  'https://iamcodefoxx.github.io/ImageCarousel/Lam7.jpg',
];

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
    }
  }
}

import Home from './views/Home';

export default class App {
  $target: Element;
  Home: Home;
  constructor({ $target }: { $target: Element }) {
    this.$target = $target;
    this.Home = new Home({ $target: this.$target });
    this.route();
  }
  route() {
    const { pathname } = window.location;
    if (pathname === '/') {
      this.Home.route();
    }
  }
}

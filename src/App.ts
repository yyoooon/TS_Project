import Component from './components/template/Component';
import Home from './views/Home';
import HexColors from './views/HexColors';
// import RandomQuotes from './views/RandomQuotes';

export default class App extends Component<undefined, undefined> {
  route() {
    const { pathname } = window.location;
    switch (pathname) {
      case '/':
        new Home(this.$target);
        break;
      case '/HexColors':
        new HexColors(this.$target);
        break;
      // case '/RandomQuotes':
      //   new RandomQuotes(this.$target);
      //   break;
      default:
        console.log('not found page');
    }
  }
  mounted() {
    this.route();
  }
}

//history.pushState로 url이동 후 route를 한번 더 실행해야한다

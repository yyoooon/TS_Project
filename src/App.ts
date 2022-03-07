import Component from './components/template/Component';
import Home from './views/Home';
// import HexColors from './views/HexColors';
// import RandomQuotes from './views/RandomQuotes';

export default class App extends Component<undefined, undefined> {
  route() {
    const { pathname } = window.location;
    switch (pathname) {
      case '/':
        this.$target.innerHTML = '';
        new Home(this.$target, 'div');
        break;
      default:
        alert('not found page');
        break;
    }
  }
  mounted() {
    this.route();
  }
}

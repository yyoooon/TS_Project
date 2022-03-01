import Component from './components/template/Component';
// import Home from './views/Home';
import HexColors from './views/HexColors';

export default class App extends Component<undefined, undefined> {
  route() {
    const { pathname } = window.location;
    switch (pathname) {
      case '/':
        this.$target.innerHTML = '';
        new HexColors(this.$target);
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

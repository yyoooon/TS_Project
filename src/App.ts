import Component from './components/template/Component';
import router from './routes/router';
import { pushRouter, replaceRouter, popStateRouter } from './routes/routeUtils';
import Header from './components/Header/Header';

export default class App extends Component<undefined, undefined> {
  template() {
    return `
    <header data-name="header"></header>
    <main  data-name="main"></main>
    <footer  data-name="footer"></footer>
    `;
  }

  setInitRoute(target: Element) {
    router(target);
    pushRouter(() => {
      router(target);
    });
    replaceRouter(() => {
      router(target);
    });
    popStateRouter(() => {
      router(target);
    });
  }

  mounted() {
    const $header = this.$target.querySelector('[data-name="header"]');
    const $main = this.$target.querySelector('[data-name="main"]');
    new Header($header);
    this.setInitRoute($main);
  }
}

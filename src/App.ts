import Component from './components/template/Component';
import route from './routes/routes';
import { pushRouter, replaceRouter, popStateRouter } from './routes/router';
import Header from './components/Header/Header';

export default class App extends Component<undefined, undefined> {
  template() {
    return `
    <header data-name="header"></header>
    <main  data-name="main"></main>
    <footer  data-name="footer"></footer>
    `;
  }

  setInitRouter(target: Element) {
    route(target);
    pushRouter(() => {
      route(target);
    });
    replaceRouter(() => {
      route(target);
    });
    popStateRouter(() => {
      route(target);
    });
  }

  mounted() {
    const $header = this.$target.querySelector('[data-name="header"]');
    const $main = this.$target.querySelector('[data-name="main"]');
    new Header($header);
    this.setInitRouter($main);
  }
}

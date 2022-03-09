import Component from '../template/Component';
import { push } from '../../routes/routeUtils';
export default class Header extends Component<undefined, undefined> {
  template() {
    return `<h1 data-name="home-header">Vanilla TS Projects</h1>`;
  }
  setEvent() {
    this.addEventToTarget('click', '[ data-name="home-header"]', () => {
      push('/');
    });
  }
}

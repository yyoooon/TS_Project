import Component from '../template/Component';

export default class Header extends Component<undefined, undefined> {
  template() {
    return `<h1 data-name="home-header"> 'Vanilla TS Projects'</h1>`;
  }
}

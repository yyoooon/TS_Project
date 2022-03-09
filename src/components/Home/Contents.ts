import Component from '../template/Component';
import { push } from '../../routes/routeUtils';

interface ContentsProps {
  data: { [key: string]: string }[];
}

export default class Contents extends Component<ContentsProps, undefined> {
  template() {
    const { data } = this.props;
    return `
    <ul data-name="content-list">
      ${data
        .map(
          ({ title, url }) =>
            `<li data-name="content-item", data-url=${url}>${title}</li>`,
        )
        .join('')}
      </ul>
    `;
  }

  handleClickContent(e: Event) {
    console.log('handler');
    const { target } = e;
    if (target instanceof HTMLElement) {
      const { url } = target.dataset;
      push(url);
    }
  }

  setEvent() {
    this.addEventToTarget(
      'click',
      '[data-name="content-item"]',
      this.handleClickContent,
    );
  }
}

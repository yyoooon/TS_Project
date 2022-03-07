import Component from '../template/Component';

interface ContentsProps {
  data: { [key: string]: string }[];
}

export default class Contents extends Component<ContentsProps, ContentsProps> {
  template() {
    const { data } = this.props;
    return `
      ${data
        .map(
          ({ title, thumbnail, url }) =>
            `<li data-name="content-item", data-url=${url}>${title}${thumbnail}${url}</li>`,
        )
        .join('')}
    `;
  }

  setEvent() {
    this.addEvent('click', ({ target }) => {
      if (target instanceof HTMLElement) {
        const { url } = target.dataset;
        console.log(url);
        history.pushState(null, null, url);
      }
    });
  }
}

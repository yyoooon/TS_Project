import Component from '../template/Component';

interface PropsType {
  currentSlideIndex: number;
  imageUrlList: string[];
}

class Slider extends Component<PropsType, PropsType> {
  setup() {
    this.state = this.props;
  }

  template() {
    const { imageUrlList, currentSlideIndex } = this.state;
    return `
    <ul data-name='slider-list'>
    ${imageUrlList
      .map(
        (url, i) =>
          `<li data-name='slider-item' class='fade ${
            i === currentSlideIndex ? 'active' : ''
          }'><img src="${url}"></li>`,
      )
      .join('')}
    </ul>
    `;
  }
}
export default Slider;

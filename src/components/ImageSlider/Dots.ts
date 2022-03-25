import Component from '../template/Component';

interface PropsType {
  currentSlideIndex: number;
  indexArr: number[];
}

class Dots extends Component<PropsType, PropsType> {
  setup() {
    this.state = this.props;
  }

  template() {
    const { currentSlideIndex, indexArr } = this.state;
    return `
           ${indexArr
             .map(
               v =>
                 `<span class='dot ${
                   v === currentSlideIndex ? 'active' : ''
                 }'></span>`,
             )
             .join('')}
    `;
  }
}

export default Dots;

import Component from '../components/template/Component';
import { imageUrlList } from '../dummy/index';
import Slider from '../components/ImageSlider/Slider';
import ArrowButtons from '../components/ImageSlider/ArrowButtons';
import Dots from '../components/ImageSlider/Dots';
import '../../style/imageSlider.scss';

interface StateType {
  currentSlideIndex: number;
  maxLength: number;
}

class ImageSlider extends Component<undefined, StateType> {
  Slider: Slider;
  Dots: Dots;

  setup() {
    this.state = {
      currentSlideIndex: 0,
      maxLength: imageUrlList.length,
    };
  }

  template() {
    return `
    <div id='Image-slider-container'>
      <div data-component="slider"></div>
      <div data-component="arrow-buttons"></div>
      <div data-component="dots"></div>
    </div>
    `;
  }

  handleClickPrevButton() {
    const { currentSlideIndex, maxLength } = this.state;
    const newIndex =
      currentSlideIndex === 0 ? maxLength - 1 : currentSlideIndex - 1;

    this.setState({ ...this.state, currentSlideIndex: newIndex }, true);
  }

  handleClickNextButton() {
    const { currentSlideIndex, maxLength } = this.state;
    const newIndex =
      currentSlideIndex === maxLength - 1 ? 0 : currentSlideIndex + 1;

    this.setState({ ...this.state, currentSlideIndex: newIndex }, true);
  }

  mounted() {
    const $slider = this.$target.querySelector('[data-component="slider"]');
    const $dots = this.$target.querySelector('[data-component="dots"]');
    const $arrowButtons = this.$target.querySelector(
      '[data-component="arrow-buttons"]',
    );

    this.Slider = new Slider($slider, {
      currentSlideIndex: this.state.currentSlideIndex,
      imageUrlList,
    });

    this.Dots = new Dots($dots, {
      currentSlideIndex: this.state.currentSlideIndex,
      indexArr: Array.from({ length: this.state.maxLength }, (_, i) => i),
    });

    new ArrowButtons($arrowButtons, {
      onClickPrev: this.handleClickPrevButton.bind(this),
      onClickNext: this.handleClickNextButton.bind(this),
    });
  }

  reRender() {
    this.Slider.setState({
      ...this.Slider.state,
      currentSlideIndex: this.state.currentSlideIndex,
    });

    this.Dots.setState({
      ...this.Dots.state,
      currentSlideIndex: this.state.currentSlideIndex,
    });
  }
}
export default ImageSlider;

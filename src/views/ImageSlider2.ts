import Component from '../components/template/Component';
import { imageUrlList } from '../dummy';

interface ImageSliderState {
  currentIndex: number;
  slideMaxLength: number;
}

class ImageSlider extends Component<undefined, ImageSliderState> {
  setup() {
    this.state = { currentIndex: 1, slideMaxLength: imageUrlList.length };
  }
}

export default ImageSlider;

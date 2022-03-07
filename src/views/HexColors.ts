import Component from '../components/template/Component';
import ChangeButton from '../components/hexColors/ChangeButton';
import Contents from '../components/hexColors/Contents';

interface HexColorsState {
  hexCode: string;
}

class HexColors extends Component<undefined, HexColorsState> {
  $changeButton;
  $contents;
  constructor($target: Element, tagName: string) {
    super($target, tagName);
    this.$contents = new Contents(this.$myDom, 'div');
    this.$changeButton = new ChangeButton(this.$myDom, 'button', {
      onClick: this.handleClickButton.bind(this),
    });
  }

  setup() {
    this.setSelector(this.$myDom, 'hex-color_container');
  }

  setState(newState: HexColorsState) {
    this.state = { ...this.state, ...newState };
    if (this.$myDom instanceof HTMLElement) {
      this.$myDom.style.background = this.state.hexCode;
    }
    this.$contents.setState(this.state);
  }

  getRandomColor() {
    return '#' + Math.round(Math.random() * 0xffffff).toString(16);
  }

  handleClickButton() {
    const backColorCode = `linear-gradient( to left, ${this.getRandomColor()}, ${this.getRandomColor()} )`;
    this.setState({ hexCode: backColorCode });
  }
}

export default HexColors;

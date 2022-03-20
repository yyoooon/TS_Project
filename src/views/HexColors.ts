import Component from '../components/template/Component';
import Contents from '../components/HexColors/Contents';

interface HexColorsState {
  hexCode: string;
}

class HexColors extends Component<undefined, HexColorsState> {
  Contents: Contents;
  $container: Element;

  setup() {
    this.state = { hexCode: '#ffffff' };
  }

  template() {
    return `
    <div data-name="hex-colors_container">
      <div data-name="contents"></div>
      <button data-name="change-button">click me</button>
    </div>
    `;
  }

  mounted() {
    const $contents = this.$target.querySelector('[data-name="contents"]');
    this.Contents = new Contents($contents, this.state);
    this.$container = this.$target.querySelector(
      '[data-name="hex-colors_container"]',
    );
  }

  getRandomColor() {
    return '#' + Math.round(Math.random() * 0xffffff).toString(16);
  }

  changeBackgroundColor(backColorCode: string) {
    if (this.$container instanceof HTMLElement) {
      this.$container.style.background = backColorCode;
    }
  }

  handleClickButton() {
    const backColorCode = `linear-gradient( to left, ${this.getRandomColor()}, ${this.getRandomColor()} )`;
    this.changeBackgroundColor(backColorCode);
    this.setState({ hexCode: backColorCode }, true);
  }

  setEvent() {
    this.addEventToTarget(
      'click',
      '[data-name="change-button"]',
      this.handleClickButton.bind(this),
    );
  }

  reRender() {
    this.Contents.setState(this.state);
  }
}

export default HexColors;

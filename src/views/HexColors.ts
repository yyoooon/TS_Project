import Component from '../components/template/Component';
import Contents from '../components/hexColors/Contents';
import ChageButton from '../components/hexColors/ChangeButton';

interface HexColorsState {
  hexCode: string;
}

class HexColors extends Component<undefined, HexColorsState> {
  setup() {
    this.state = { hexCode: '#ffffff' };
  }

  template() {
    return `
    <div data-name="hex-colors_container" style="background:${this.state.hexCode};">
      <div data-name="contents"></div>
      <div data-name="change-button-wrap"></div>
    </div>
    `;
  }

  mounted() {
    const $contents = this.$target.querySelector('[data-name="contents"]');
    const $button = this.$target.querySelector(
      '[data-name="change-button-wrap"]',
    );

    new Contents($contents, this.state);
    new ChageButton($button, { onClick: this.handleClickButton.bind(this) });
    return;
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

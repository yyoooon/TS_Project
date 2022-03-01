import Component from '../components/template/Component';
import ChangeButton from '../components/HexColors/ChangeButton';

class HexColors extends Component<undefined, { hexCode: string }> {
  setup() {
    this.state = { hexCode: '#ffffff' };
  }

  template() {
    const { hexCode } = this.state;
    return `
    <div data-name='hex-color_container' style="background:${hexCode};">
      <div  data-name="contents">
        <h1 data-name='title'>CLICK THE BUTTON BELLOW TO DISPLAY THE HEX CODE </br> OF THE A RANDOM COLOR</h1>
        <p data-name='color-code'>The hex code of the color is ${hexCode}</p>
      </div> 
      <div data-name="button_wrap"></div>
    </div>
    `;
  }

  getRandomColor() {
    return '#' + Math.round(Math.random() * 0xffffff).toString(16);
  }

  handleChangeBackColor() {
    const backColorCode = `linear-gradient( to left, ${this.getRandomColor()}, ${this.getRandomColor()} )`;
    this.setState({ hexCode: backColorCode });
  }

  mounted() {
    const $button_wrap = document.querySelector('[data-name="button_wrap"]');
    new ChangeButton($button_wrap, {
      handleChangeBackColor: this.handleChangeBackColor.bind(this),
    });
  }
}

export default HexColors;

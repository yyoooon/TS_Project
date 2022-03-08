import Component from '../template/Component';

class Contents extends Component<{ hexCode: string }, { hexCode: string }> {
  setup() {
    this.state = this.props || { hexCode: '#fff' };
  }
  template() {
    return `
        <h1 data-name='title'>CLICK THE BUTTON BELLOW TO DISPLAY THE HEX CODE </br> OF THE A RANDOM COLOR</h1>
        <p data-name='color-code'>The hex code of the color is ${this.state.hexCode}</p>
    `;
  }
}
export default Contents;

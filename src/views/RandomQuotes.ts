import Component from '../components/template/Component';
import Contents from '../components/RandomQuotes/Contents';
import ChangeButton from '../components/RandomQuotes/ChangeButton';
import axios from 'axios';

class RandomQuotes extends Component<undefined, { [key: string]: string }> {
  setup() {
    this.state = {
      quote: '',
      author: 'RandomQuotes',
    };
  }

  template() {
    return `
    <div data-name="quotes-container" style="background:${this.state.hexCode};">
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
    new ChangeButton($button, { onClick: this.handleClickButton.bind(this) });
    return;
  }

  setState(newState: { [key: string]: string }) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  async handleClickButton() {
    const { data } = await axios.get('https://free-quotes-api.herokuapp.com/');
    this.setState({ quote: data.quote, author: data.author });
  }
}

export default RandomQuotes;

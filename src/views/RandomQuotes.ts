import Component from '../components/template/Component';
import Contents from '../components/RandomQuotes/Contents';
import '../../style/randomQuotes.scss';
import axios from 'axios';

class RandomQuotes extends Component<undefined, { [key: string]: string }> {
  Contents: Contents;

  setup() {
    this.state = {
      quote: '',
      author: 'RandomQuotes',
    };
  }

  template() {
    return `
    <div data-name="quotes-container">
      <div data-name="contents"></div>
      <button data-name="change-button">Generate Quote</button>
    </div>
    `;
  }

  mounted() {
    const $contents = this.$target.querySelector('[data-name="contents"]');
    this.Contents = new Contents($contents, this.state);
  }

  async handleClickButton() {
    const { data } = await axios.get('https://free-quotes-api.herokuapp.com/');
    this.setState({ quote: data.quote, author: data.author }, true);
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

export default RandomQuotes;

import Component from '../components/Component';
import axios from 'axios';

class RandomQuotes extends Component<undefined> {
  $quote: Element;
  $author: Element;
  constructor($target: Element) {
    // 실행 순서가 궁금해짐 = 콜백함수는 실행되기 전까지는 실행코드가 유효한지 모른다
    super($target);
    this.render();
    this.$quote = document.querySelector('.quote'); // 비효율적인건가??
    this.$author = document.querySelector('.author');
    this.handleClickButton();
  }

  template(): string {
    return `
      <div class='quotes-container'>
          <div class='content'>
            <p class='quote'></p>
            <h3 class='author'></h3>
          </div>
          <button class='change_button'>Generate Quote</button>
      </div>
    `;
  }

  async handleClickButton() {
    // api실행
    const { data } = await axios.get('https://free-quotes-api.herokuapp.com/');
    this.$quote.innerHTML = `"${data.quote}"`;
    this.$author.innerHTML = data.author ? `- ${data.author}` : '';
  }

  mount() {
    const $button = document.querySelector('.change_button'); // 왜 맨 처음만 가져오면 안될까?? - 이벤트 거는게 먼저라서..
    $button?.addEventListener('click', () => {
      this.handleClickButton();
    });
  }

  render() {
    this.$target.innerHTML = '';
    this.$target.innerHTML = this.template();
    this.mount();
  }
}
export default RandomQuotes;

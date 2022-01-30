import Component from '../components/Component';

class HexColors extends Component<undefined> {
  $container: Element;
  $title: Element;
  constructor($target: Element) {
    super($target);
    this.render();
    this.$container = document.querySelector('.hex-color_container');
    this.$title = document.querySelector('.color-code');
  }

  template(): string {
    return `
    <div class='hex-color_container'>
      <div  class='content'>
        <h1 class='title'>CLICK THE BUTTON BELLOW TO DISPLAY THE HEX CODE </br> OF THE A RANDOM COLOR</h1>
        <p class='color-code'>The hex code of the color is '#ffffff'</p>
        <button class='change_button'>click me</button>
      </div> 
    </div>
    `;
  }

  _getRandomColor() {
    return '#' + Math.round(Math.random() * 0xffffff).toString(16);
  }

  handleChangeBackColor() {
    const backColorCode = `linear-gradient( to left, ${this._getRandomColor()}, ${this._getRandomColor()} )`;
    if (this.$container instanceof HTMLElement) {
      this.$container.style.background = backColorCode;
    }
    this.$title.innerHTML = `The hex code of the color is ${backColorCode}`;
  }

  mount() {
    const $button = document.querySelector('.change_button');
    $button?.addEventListener('click', () => {
      this.handleChangeBackColor();
    });
  }

  render() {
    this.$target.innerHTML = '';
    this.$target.innerHTML = this.template();
    this.mount();
  }
}
export default HexColors;

// css animation을 처음 적용해봄 - 랜덤으로 글씨색 바꿀 수 있음
// 문제는 버튼 누를때마다 모든 돔이 다시 생기기 때문에 글씨 컬러도 처음부터 시작함
// setState안하고 그냥 이벤트 달아줘서 누를때마다 돔에 접근해서 값을 바꿔줌
// 리액트는 전부 재렌더링 할 텐데 어떻게 구현할까?
// 텍스트 부분을 컴포넌트로 분리??

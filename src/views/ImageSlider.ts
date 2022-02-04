import Component from '../components/Component';

interface PropsType {
  imageUrlList: string[];
}

class ImageSlider extends Component<PropsType> {
  state: number;
  maxLength: number;
  constructor($target: Element, props: PropsType) {
    super($target, props);
    this.state = 1;
    this.maxLength = this.props.imageUrlList.length;
    this.render();
    this.activeSlide(true);
  }

  setState(nextState: number) {
    if (nextState > this.maxLength) {
      this.state = 1;
      return;
    }
    if (nextState < 1) {
      this.state = this.maxLength;
      return;
    }
    this.state = nextState;
  }

  template(): string {
    return `
    <div class='Image-slider-container'>
      <div class='image-slider'>
        <ul class='slider-list'>
          ${this.props.imageUrlList
            .map(url => `<li class='slider-item fade '><img src="${url}"></li>`)
            .join('')}
        </ul>
        <button class='prev'>❮</button>
        <button class='next'>❯</button>
      </div>
      <div class='dots'>
      ${this.props.imageUrlList
        .map((_, i) => `<span class='dot dot_${i}'></span>`)
        .join('')}
      </div>
    </div>
    `;
  }

  _setCurrentItemBlock(param: boolean) {
    const currentItem = document.querySelector(
      `.slider-item:nth-child(${this.state})`,
    );
    if (currentItem instanceof HTMLElement) {
      currentItem.style.display = param ? 'block' : 'none';
    }
  }

  _setCurrentDotOn(param: boolean) {
    const currentDot = document.querySelector(`.dot_${this.state - 1}`);

    if (currentDot instanceof HTMLElement) {
      currentDot.style.backgroundColor = param ? '#717171' : '#bbb';
    }
  }

  activeSlide(param: boolean) {
    this._setCurrentItemBlock(param);
    this._setCurrentDotOn(param);
  }

  handleClickButton(status: string) {
    this.activeSlide(false);
    this.setState(status === 'prev' ? this.state - 1 : this.state + 1);
    this.activeSlide(true);
  }

  mount() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton?.addEventListener('click', () => {
      this.handleClickButton('prev');
    });
    nextButton?.addEventListener('click', () => {
      this.handleClickButton('next');
    });
  }

  render() {
    this.$target.innerHTML = '';
    this.$target.innerHTML = this.template();
    this.mount();
  }
}
export default ImageSlider;

//  상태에 현재 index를 설정한다. 초기 값은 1
//  상태 index에 해당하는 index번째 li자식을 display:block으로 바꾼다
// 이전, 이후 버튼에 이벤트를 걸어주는데 이전은 상태 -1, 이후는 상태 +1을 해준다
// 그러나 현재 상태가 imageUrls의 갯수와 같다면 이후 일시 1로 바꾸고
// 현재 상태가 1일 시 이전을 누르면  imageUrls의 갯수로 바꿔준다
// 이후 일 시 상태 -1이 display:none, 이전 일 시 상태 +1이 display: none
// 상태 + 1이 length보다 크면 0으로 바꿔주고, 상태-1이 0보다 작으면 length로 바꿔줌

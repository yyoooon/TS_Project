import Component from '../template/Component';

interface PropsTypes {
  onClickPrev: () => void;
  onClickNext: () => void;
}

class ArrowButtons extends Component<PropsTypes, undefined> {
  template() {
    return `
    <button class='prev'>❮</button>
    <button class='next'>❯</button>
    `;
  }

  setEvent() {
    this.addEventToTarget('click', '.prev', () => {
      this.props.onClickPrev();
    });
    this.addEventToTarget('click', '.next', () => {
      this.props.onClickNext();
    });
  }
}

export default ArrowButtons;

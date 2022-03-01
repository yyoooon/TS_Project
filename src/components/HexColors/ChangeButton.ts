import Component from '../template/Component';

interface ChangeButtonProps {
  handleChangeBackColor: () => void;
}

class ChangeButton extends Component<ChangeButtonProps, undefined> {
  template() {
    return `
    <button data-name='change_button'>click me</button>
    `;
  }
  setEvent() {
    this.addEvent(
      'click',
      '[data-name="change_button"]',
      this.props.handleChangeBackColor,
    );
  }
}
export default ChangeButton;

// 자신의 상태가 아닌 부모의 상태가 바뀔 때마다 이벤트가 걸리도록 한 것
// 자신의 상태가 바뀔 때 돔도 다시 그려지지만 이벤트는 부모한테 걸려있으므로 부모가 바뀌지 않는 이상 이벤트가 다시 걸리지 않음

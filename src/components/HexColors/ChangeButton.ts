import Component from '../template/Component';

interface ChangeButtonProps {
  onClick: () => void;
}

class ChangeButton extends Component<ChangeButtonProps, undefined> {
  template() {
    return `<button data-name="change-button">click me</button>`;
  }
  setEvent() {
    this.addEventToTarget(
      'click',
      '[data-name="change-button"]',
      this.props.onClick,
    );
  }
}
export default ChangeButton;

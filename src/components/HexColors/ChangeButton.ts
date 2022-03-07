import Component from '../template/Component';

interface ChangeButtonProps {
  onClick: () => void;
}

class ChangeButton extends Component<ChangeButtonProps, undefined> {
  setup() {
    this.setSelector(this.$myDom, 'change-button');
  }
  template() {
    return `click me`;
  }
  setEvent() {
    this.addEvent('click', this.props.onClick);
  }
}
export default ChangeButton;

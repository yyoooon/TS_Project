import Component from '../Component';

interface ButtonProps {
  value: string;
  backgroundColor?: string;
}

class Button extends Component<ButtonProps> {
  constructor($target: Element, props: ButtonProps) {
    super($target, props);
    this.render();
  }

  template() {
    const { value, backgroundColor } = this.props;
    return `
    <button class='calculator_button' ${
      backgroundColor ? `style="background-color:${backgroundColor}"}` : ''
    } type='button' data-value=${value}>${value}</button>
    `;
  }

  render() {
    const ButtonWrap = document.createElement('div');
    ButtonWrap.innerHTML = this.template();
    this.$target.appendChild(ButtonWrap);
  }
}

export default Button;

// 인라인 스타일에 hover어떻게 적용하는지 알아보기

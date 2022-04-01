// import Component from '../components/Component';
// import ViewBox from '../components/Calculator/ViewBox';
// import ButtonContainer from '../components/Calculator/ButtonContainer';
// import { createDom } from '../utils/createDom';
// import '../../style/calculator.scss';

// class Calculator extends Component<undefined> {
//   state = '';
//   constructor($target: Element) {
//     super($target);
//     this.render();
//   }

//   template() {
//     return `
//     <div data-name='calculator'>
//     </div>
//     `;
//   }
//   // mount() {}
//   setState(nextState: string) {
//     // 예외처리 해주기
//     this.state = this.state + nextState;
//     this.render();
//   }

//   handleClickButton(value: string) {
//     this.setState(value);
//     console.log(this.state);
//   }

//   render() {
//     this.$target.innerHTML = '';
//     this.$target.appendChild(createDom(this.template()));
//     const calculator = document.querySelector('[data-name="calculator"]');

//     new ViewBox(calculator, {
//       value: this.state,
//     });

//     new ButtonContainer(calculator, {
//       onClick: value => {
//         this.handleClickButton(value);
//       },
//     });

//     this.$target.appendChild(createDom(`<button type='submit'>=</button>`));

//     // this.mount();
//   }
// }
// export default Calculator;

// // onClick 함수 전달할 때 왜 화살표함수만 되는지(선언식 함수의 binding문제)
// // 자식이 부모의 상태를 가지고 상태가 바뀔 때만 렌더링되도록 하기
// // 계산 함수 만들고 결과 반환 이벤트 걸기

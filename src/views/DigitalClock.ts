// import Component from '../components/Component';
// import { DateValues, getCurrentDate } from '../utils/getDateValues';

// class DigitalClock extends Component<undefined> {
//   state: DateValues;
//   constructor($target: Element) {
//     super($target);
//     this.state;
//     this.setState();
//     this.mount();
//   }

//   template() {
//     return `
//       <div class='digital-clock-container'>
//         <div class='digital-clock'>
//           <h1> ${this.state.dd}</h1>
//           <h1> ${this.state.hh.hour}</h1>
//           <h1> ${this.state.mm}</h1>
//           <h1> ${this.state.ss}</h1>
//           <h1> ${this.state.hh.time}</h1>
//         </div>
//       </div>
//     `;
//   }

//   render() {
//     this.$target.innerHTML = '';
//     this.$target.innerHTML = this.template();
//   }

//   setState() {
//     this.state = getCurrentDate();
//     this.render();
//   }

//   mount() {
//     setInterval(() => {
//       this.setState();
//     }, 1000);
//     console.log(this.state);
//   }
// }

// export default DigitalClock;

import Component from '../template/Component';
import { DateValues } from '../../utils/getDateValues';

class Clock extends Component<DateValues, DateValues> {
  setup() {
    this.state = this.props;
  }
  template() {
    return `
    <h1> ${this.state.dd}</h1>
    <h1> ${this.state.hh.hour}</h1>
    <h1> ${this.state.mm}</h1>
    <h1> ${this.state.ss}</h1>
    <h1> ${this.state.hh.time}</h1>
    `;
  }
}

export default Clock;

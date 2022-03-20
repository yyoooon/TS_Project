import Component from '../components/template/Component';
import Clock from '../components/DigitalClock/Clock';
import { DateValues, getCurrentDate } from '../utils/getDateValues';

class DigitalClock extends Component<undefined, { dateValues: DateValues }> {
  Clock: Clock;

  setup() {
    this.state = { dateValues: getCurrentDate() };

    setInterval(() => {
      this.setState({ dateValues: getCurrentDate() }, true);
    }, 1000);
  }

  template() {
    return `
      <div data-name='digital-clock-container'>
        <div data-name='digital-clock'></div>
      </div>
    `;
  }

  mounted() {
    const $digitalClock = this.$target.querySelector(
      '[data-name="digital-clock"]',
    );
    this.Clock = new Clock($digitalClock, this.state.dateValues);
  }

  reRender() {
    this.Clock.setState(this.state.dateValues);
  }
}

export default DigitalClock;

// const setTime = () => {
//   const options = {
//     weekday: 'short',
//     hour: 'numeric',
//     minute: 'numeric',
//   };

//   const time = new Intl.DateTimeFormat('en', options)
//     .format(new Date())
//     .toUpperCase();

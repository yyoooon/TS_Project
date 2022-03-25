export default class Component<P, S> {
  $target: Element;
  props: P;
  state?: S;
  constructor($target: Element, props?: P) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.render();
    this.setEvent();
    this.fetch();
  }

  setup() {
    return;
  }

  fetch() {
    return;
  }

  template() {
    return '';
  }

  mounted() {
    return;
  }

  addEventToTarget(
    eventType: string,
    selector: string,
    callback: (e?: Event) => void,
  ) {
    const children = [...Array.from(this.$target.querySelectorAll(selector))];

    const isTarget = (target: EventTarget): boolean | Element => {
      if (target instanceof HTMLElement) {
        return children.includes(target) || target.closest(selector);
      }
    };

    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }

  setEvent() {
    return;
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  reRender() {
    return;
  }

  // 방법을 찾자
  setState(newState: S, reRender = false) {
    this.state = { ...this.state, ...newState };
    reRender ? this.reRender() : this.render();
  }
}

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
  }

  setup() {
    return;
  }

  setSelector($dom: Element, name: string) {
    if ($dom instanceof HTMLElement) {
      $dom.dataset.name = name;
    }
  }

  mounted() {
    return;
  }

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {
    return;
  }

  setState(newState: S) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEventToTarget(
    eventType: string,
    selector: string,
    callback: (e: Event) => void,
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
}

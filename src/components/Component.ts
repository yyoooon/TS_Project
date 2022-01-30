export default class Component<T> {
  $target: Element;
  props: T;
  constructor($target: Element, props?: T) {
    this.$target = $target;
    this.props = props;
    // 상태 받아올 경우 this.state = props.initialState
    // container면 setInitialState만들어서 여기에 호출
  }

  // setState(newState) {
  //   this.state = newState;
  //   this.render();
  // }

  // template() {
  //   return ``;
  // }

  // render() {
  //   this.$target.innerHTML = this.template();
  //   this.mount();
  // }

  // mount() {}

  // async initialState() {}
}

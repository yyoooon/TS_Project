export default class Home {
  $target: Element;
  $home: Element;
  constructor({ $target }: { $target: Element }) {
    this.$target = $target;
    this.$home = document.createElement('div');
    this.render();
  }
  route() {
    this.$target.appendChild(this.$home);
  }
  render() {
    this.$home.innerHTML = `
      <h1 class='home_title'>안녕ㅠㅠㅠ!!!!!</h1>
    `;
  }
}

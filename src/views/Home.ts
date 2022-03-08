import Component from '../components/template/Component';
import Header from '../components/home/Header';
import Contents from '../components/home/Contents';

const contentData = [
  {
    title: 'HexColors',
    thumbnail: '썸네일1',
    url: 'HexColors',
  },
  {
    title: 'RandomQuotes',
    thumbnail: '썸네일2',
    url: 'HexColors',
  },
];

export default class Home extends Component<
  undefined,
  { [key: string]: string }[]
> {
  setup() {
    this.state = contentData;
  }

  template() {
    return `
      <header data-name='home-header'></header>
      <main data-name='home-main'></main>
      <footer data-name='home-footer'></footer>
    `;
  }

  mounted() {
    const $header = this.$target.querySelector('[data-name="home-header"]');
    const $main = this.$target.querySelector('[data-name="home-main"]');

    new Header($header);
    new Contents($main, { data: this.state });
  }
}

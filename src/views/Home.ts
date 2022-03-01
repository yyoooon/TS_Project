import Component from '../components/template/Component';
import Header from '../components/Home/Header';
import Contents from '../components/Home/Contents';

const contentData = [
  {
    title: 'HexColors',
    thumbnail: '썸네일1',
    url: 'HexColors',
  },
];

export default class Home extends Component<undefined, undefined> {
  template() {
    return `
    <header data-name="home-header"></header>
    <main>
      <ul data-name="content-list"></ul>
    </main>
    `;
  }
  mounted() {
    const $header = document.querySelector('[data-name="home-header"]');
    const $contents = document.querySelector('[data-name="content-list"]');
    new Header($header);
    new Contents($contents, { data: contentData });
  }
}

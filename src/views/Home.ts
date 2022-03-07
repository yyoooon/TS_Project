import Component from '../components/template/Component';
import Header from '../components/home/Header';
import Contents from '../components/home/Contents';

const contentData = [
  {
    title: 'HexColors',
    thumbnail: '썸네일1',
    url: 'HexColors',
  },
];

export default class Home extends Component<
  undefined,
  { [key: string]: string }[]
> {
  $header: Header;
  $contents: Contents;
  constructor($target: Element, tagName: string) {
    super($target, tagName);
    this.$header = new Header(this.$myDom, 'h1');
    this.$contents = new Contents(this.$myDom, 'ul', { data: this.state });
  }

  setup() {
    this.state = contentData;
    this.setSelector(this.$myDom, 'home-container');
  }
}

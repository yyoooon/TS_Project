import Component from '../components/template/Component';
import Contents from '../components/Home/Contents';

const contentData = [
  {
    title: 'HexColors',
    thumbnail: '썸네일1',
    url: 'HexColors',
  },
  {
    title: 'RandomQuotes',
    thumbnail: '썸네일2',
    url: 'RandomQuotes',
  },
  {
    title: 'DigitalClock',
    thumbnail: '썸네일3',
    url: 'DigitalClock',
  },
];

export default class Home extends Component<
  undefined,
  { [key: string]: string }[]
> {
  setup() {
    this.state = contentData;
  }

  mounted() {
    new Contents(this.$target, { data: this.state });
  }
}

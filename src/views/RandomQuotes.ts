// import Component from '../components/template/Component';
// import ChangeButton from '../components/randomQuotes/ChangeButton';
// import Contents from '../components/randomQuotes/contents';
// import axios from 'axios';

// class RandomQuotes extends Component<undefined, { [key: string]: string }> {
//   $contents;
//   $changeButton;
//   constructor($target: Element, tagName: string) {
//     super($target, tagName);
//     this.$contents = new Contents(this.$myDom, 'div', { ...this.state });
//     this.$changeButton = new ChangeButton(this.$myDom, 'button', {
//       onClick: this.handleClickButton.bind(this),
//     });
//   }

//   setup() {
//     this.state = {
//       quote: '',
//       author: 'RandomQuotes',
//     };
//     this.setSelector(this.$myDom, 'quotes-container');
//   }

//   setState(newState: { [key: string]: string }) {
//     this.state = { ...this.state, ...newState };
//     this.$contents.setState(newState);
//   }

//   async handleClickButton() {
//     const { data } = await axios.get('https://free-quotes-api.herokuapp.com/');
//     this.setState({ quote: data.quote, author: data.author });
//   }
// }

// export default RandomQuotes;

import React, {Component} from 'react';
import Header from './components/Header';
import BlockCards from './components/BlockCards';
import ContactsNative from './pages/contacts/ContactsNative';
import ContactsReactYandexMaps from './pages/contacts/ContactsReactYandexMaps';

import ApiService from './services/apiServices';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

export default class App extends Component {

	apiService = new ApiService();

	cnt = 2

	constructor() {
		super();
		this.cardInfo();
	}

	state = {
		cards: [],
		searchText: "",
		amoutCards: 6
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	};

	cardInfo() {
		this.apiService
			.getAllPeople()
			.then(cards => {
					this.setState({
						cards
					});
			});
	}

	sliceCards(cards) {
		const {amoutCards} = this.state;
		return cards.slice(0, amoutCards);
	}

	onSearch = (cards, text) => {
		if (!text.length) {
			return cards;
		}
		return cards.filter(card => {
			const {title, desc} = card;
			return title.toLowerCase().indexOf(text.toLowerCase()) > -1 || desc.toLowerCase().indexOf(text.toLowerCase()) > -1;
		});
	}

	onSearchChange = (text) => {
		this.setState({
			searchText: text
		});
	}

	onScroll = () => {
		if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
			this.setState(({ amoutCards, cards }) => {
				return {
					amoutCards: amoutCards + this.cnt <= cards.length ? amoutCards + this.cnt : cards.length
				}
			});
	 }
	}

	render() {
		const {cards, searchText} = this.state;
		
		const filterCards = this.onSearch(this.sliceCards(cards), searchText);
		return (
			<>
				<Router>
					<Header />
					<Switch>
						<Route path="/contacts" component={ContactsNative} />
						<Route path="/contacts-react-npm" component={ContactsReactYandexMaps} />
						<BlockCards cards={filterCards} onSearchChange={this.onSearchChange} />
					</Switch>
				</Router>
			</>
		);
	};
}
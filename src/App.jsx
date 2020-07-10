import React, {Component} from 'react';
import Header from './components/Header';
import BlockCards from './components/BlockCards';
import Contacts from './pages/Contacts';

import ApiService from './services/apiServices';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

export default class App extends Component {

	apiService = new ApiService();

	constructor() {
		super();
		this.cardInfo();
	}

	state = {
		cards: [],
		text: 'а'
	}

	cardInfo() {
		this.apiService
			.getAllPeople()
			.then(cards => {
					this.setState({
						cards,
						search: ""
					});
			});
	}

	onSearch = (cards, text) => {
		if (!text.length) {
			return cards;
		}
		return cards.filter(card => {
			console.log(card.title.toLowerCase().indexOf(text.toLowerCase()) > -1)
			return card.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
		});
	}

	onSearchChange = (text) => {
		this.setState(prevState => {
			const cards = prevState.cards.map(card => {
				return {
					...card,
					term: text
				}
			});
			return {
				...prevState,
				cards
			};
		});
	}

	render() {
		const {cards, text} = this.state;

		const filterCards = () => {
			return this.onSearch(cards, text);
		}
		return (
			<>
				<Router>
					<Header />
					<Switch>
						<Route path="/contacts" component={Contacts} />
						<BlockCards cards={filterCards} onSearch={this.onSearch} />
					</Switch>
				</Router>
			</>
		);
	};
}